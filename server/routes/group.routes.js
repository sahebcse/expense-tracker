const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')

const helpers=require('../helpers/mongofunctions')
const addFriend=helpers.addFriend
const appendGroup=helpers.appendGroup
const User=require('../models/user.model')
const Group=require('../models/group.model')
const { protect } = require('../middleware/auth')

router.post('/createGroup',protect, async (req, res)=>
{
    console.log('Aa gaya re main group banane ko.......')
    const group=await Group.create({
        name: req.body.name,
        groupType: req.body["groupType"],
        groupImage: req.body["groupImage"],
        totalExpences: req.body["totalExpences"],
        members:[]
    })

    group.members.push(req.body["createdBy"])
    await group.save();
    console.log('chal raha abhi....')
    User.findById(req.body["createdBy"], async (err, user)=>
    {
        if (err)
        {
            console.log(err)
            return ({message: "error"})
        }
        else
        {
            if (!user.groups.includes(group._id))
            {
                user.groups.push(group._id)
                await user.save();         
            }
        }

    })
    console.log('chal jaa raha main gandu....')

    User.findById(req.body.createdBy).populate({path: 'balances', populate:{path:'uid'}}).populate('groups', 'name groupType totalExpences groupImage members').exec((err, result)=>
        {
            if (err)
            {
                console.log(err)
                return res.json(err)
            }
            else
            {
                return res.status(200).json(result);
            }
        })
    
})

router.post('/add_user_to_group',protect,  async (req, res)=>
{
    console.log(`inside adding members.....${req.body.userId}`)
    const email = req.body.userId;
    const user = await User.findOne({email});
    const userId = user._id;
    await Group.findById(req.body.groupId, (err, group)=>
    {
        if (err)
        {
            console.log(err)
        }
        else
        {
            if(!group.members.includes(req.body.userId)){
            group.members.push(userId)
            group.save((err, result)=>
            {
                if (err)
                {
                    console.log(err)
                }
            })}
        }
    })

    await User.findById(userId,  (err, user)=>
    {
        if (err)
        {
            console.log(err)
            return ({message: "error"})
        }
        else
        {
            if (!user.groups.includes(req.body.groupId))
            {
                user.groups.push(req.body.groupId)
                user.save();
                
                
                
            }
        }

    })

    //The below lines ensure that all the users in a group are mutual friends of each other
    const groupData=await Group.findById(req.body.groupId)
    for (let k=0;k<groupData.members.length;k++)
    {
        for (let l=k+1;l<groupData.members.length;l++)
        {
            addFriend(groupData.members[k], groupData.members[l])
        }
    }
    
    
    User.findById(req.body.currentUser).populate({path: 'balances', populate:{path:'uid'}})
    .populate('groups', 'name groupType totalExpences groupImage')
    .populate({path:'groups', populate:{path:'members', select:'firstName lastName email'}})
    .exec((err, result)=>
    {
        if (err)
        {
            console.log(err)
            return res.json(err)
        }
        else
        {
            return res.status(200).json(result);
        }
    })

})

router.get('/group/:id',protect,  (req, res)=>{
    Group.findById(req.params.id).populate('members', 'first_name email').exec((err, result)=>
    {
        if (err)
        {
            console.log(err)
            return res.json(err)
        }
        else
        {
            return res.json(result)
        }
    })
})

router.get('/findgroups', async (req, res)=>
{
    const groupData=await Group.find()
    res.json(groupData)
})

module.exports=router