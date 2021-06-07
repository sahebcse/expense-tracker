const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')

const helpers=require('../helpers/mongofunctions')
const addFriend=helpers.addFriend
const User=require('../models/user.model')
const Group=require('../models/group.model')

//app.use(express.json())
//app.use(express.urlencoded())

router.get('/', (req, res)=>
{
    
    res.render('home')
})

module.exports=router