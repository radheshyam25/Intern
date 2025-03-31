const User=require("../model/user")


const handleUser=async(req,res)=>{
    try{
    const {email}=req.params.email

    if(!email) res.status(400).send({message:"Email is required"})

        const user=await User.findOne({email:email})

        res.status(201).send({message:user})
    }

    catch(err){
        throw err
    }
}

module.exports={handleUser}