const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.protect = async(req,res,next)=>{
    let token;
    console.log(`inside the middleware....${req.headers.authorization}`)
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
        console.log(`still inside the middleware.... ${token}')`)
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decoded.id);
        req.user = user;
        console.log('otside the middleware.....')
        next();
    }
}

