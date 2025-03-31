const User=require("../model/user")
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')

const handleLogin=async(req,res)=>{
    try{
        const {email,password}=req.body 

        if(!email || !password) return res.status(400).send({message:"Email or Password are not present"})
        
        const user=await User.findOne({email:email}).exec();//exec() explicitly execute the query tells the mongoose to execute it immediately,but while using await it tells the mongo that user is waiting so it execute implicit,so it is optional while using async await..

        if(!user) return res.status(401).send({message:"Email doesn't exist,Create your account"})

        
        
        const match=await bcrypt.compare(password,user.password)

        if(!match) return res.status(401).send({message:"Password is invalid"})
        
       const {accessToken,refreshToken}=Tokens(user.email)

        const result=await User.updateOne({email:user.email},{
            $set:{
                refreshtoken:refreshToken
            },
        })

        res.cookie('jwt',refreshToken,{httpOnly:false,secure:true,sameSite:'None',maxAge:24*60*60})
        res.status(200).send({message:{
        
        
            "userid":user._id,
            "accessToken":accessToken
        }
            
        
    });
    }

    catch(err){
        console.log(err)
        res.send("An error Occured")
    }
}

const Tokens=(email)=>{
    const accessToken=jwt.sign(
        {
            email:email,
        },
        process.env.ACCESS_TOKEN_URL,
        {expiresIn:'600s'}
    )

    const refreshToken=jwt.sign(
        {
            email:email,
        },
        process.env.REFRESH_TOKEN_URL,
        {expiresIn:'1d'}
    )

    return {accessToken:accessToken,refreshToken:refreshToken}
    }


module.exports={handleLogin}