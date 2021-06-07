const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const isAuthentiated = async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = User.findById(decoded.id);
        req.user = user;
        next();
    }
}

module.exports=isAuthenticated