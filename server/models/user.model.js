const mongoose=require('mongoose')
const jwt = require('jsonwebtoken');
const Schema=mongoose.Schema;

const balanceSchema=new Schema({
    uid: {type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    balance: Number
})

const userSchema=new Schema({
    firstName: String, 
    lastName: String,
    email: String,
    selectedFile: String,
    password: String,
    groups: [{type: Schema.Types.ObjectId, ref: 'Group'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    balances: [balanceSchema]
})

userSchema.methods.getSignedToken = function() {
    return jwt.sign({id:this._id}, process.env.SECRET_KEY, {
        expiresIn:"30min",
    });
};

const User = mongoose.model('User', userSchema)
module.exports= User;
