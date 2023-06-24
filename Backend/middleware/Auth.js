const jwt = require('jsonwebtoken');
const auth=(req,res,next)=>{

    try {
        const token=req.headers.authorization?.split(" ")[1]
        let  decoded = jwt.verify(token, process.env.KEY);
        if(decoded){
            req.body.userID=decoded.userID
            req.body.username=decoded.username
          
            next()
        }else{
            res.status(200).json({msg:"Please Login!"})
        }
       

    }catch (error) {
        res.status(400).json({ error:error.message});
    }
}

module.exports={auth}