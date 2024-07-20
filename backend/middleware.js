const {JWT_SECRET} = require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const header = req.headers.authorization;
    if(!header || !header.startsWith('Bearer ')){
        res.status(403).json({});
    }
    header = header.split(' ')[1];
    try{
        const decoded = jwt.verify(header,JWT_SECRET);
        req.userId = decoded.userId;
        next();
    }
    catch(err){
        res.status(403).json({});
    }
}

module.exports = authMiddleware;