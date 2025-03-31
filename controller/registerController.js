const User=require("../model/user")
const bcrypt=require("bcryptjs")

const handleNewUser=async(req,res)=>{
    
    const {user,email,pwd,address}=req.body;

    if(!user || !email || !pwd || !address) return res.status(400).send({message:"All fields are required"})

    const duplicate=await User.findOne({email:email}).exec()
    if(duplicate) return res.status(409).send({message:"duplicate entry"})
    
    try{
        const hashedpwd=await bcrypt.hash(pwd,10)
        const result=await User.create({
            name:user,
            email:email,
            password:hashedpwd
        });

        res.status(201).send({message:"Account Created Successfully,Login Now!!!"});

    }

    catch(err){
        console.log(err);
    }
}

module.exports={handleNewUser}