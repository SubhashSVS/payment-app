const {JWT_SECRET} = require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const header = req.headers.authorization;
    if(!header || !header.startsWith('Bearer ')){
        res.status(403).json({message : "invalid header"});
    }
    const token = header.split(' ')[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch(err){
        res.status(403).json({err});
    }
}

module.exports = authMiddleware;