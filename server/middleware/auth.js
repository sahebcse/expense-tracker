const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.protect = async(req,res,next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);

        const user = User.findById(decoded.id);
        req.user = user;
        next();
    }
}

