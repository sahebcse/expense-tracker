const express=require('express')
const router=express.Router();
const mongoose=require('mongoose')

const helpers=require('../helpers/mongofunctions')
const addFriend=helpers.addFriend
const User=require('../models/user.model')
const Group=require('../models/group.model')
const { protect } = require('../middleware/auth')
const bcrypt=require('bcrypt')

//app.use(express.json())
//app.use(express.urlencoded())

router.post('/user', async (req, res)=>
{
    try {
        const hash=await bcrypt.hash(req.body.password, 10)
        const user=await User.create({
            firstName: req.body["firstName"],
            lastName: req.body["lastName"],
            email: req.body["email"],
            selectedFile: req.body["selectedFile"],
            password: hash
        })
        
        
        const token = user.getSignedToken();
        res.status(201).json({result:user, token});
        
    } catch (error) {
        res.status(404).json({failure:true, message:error.message});
    }
})


router.get('/balances/:id', protect, async (req, res)=>
{
    try {
        console.log('inside the get balances.......')
        User.findById(req.params.id).populate({path: 'balances', populate:{path:'uid'}})
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
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post('/user/signIn', async (req, res)=>
{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message:"user does not exit"});

        //if(user.password!==password) return res.status(404).json({message:"wrong username or password"});

        const match=await bcrypt.compare(password, user.password)
        if (!match) return res.status(404).json({message:"wrong username or password"});

        await User.findById(user._id).populate('balances', 'firstName lastName selectedFile').populate('groups', 'name groupType totalExpences groupImage members').exec((err, result)=>
        {
            if (err)
            {
                console.log(err)
                return res.json(err)
            }
            else
            {
                
                const token = result.getSignedToken();
                return res.status(201).json({result:result, token});
            }
        })
    } catch (error) {
        res.status(404).json(error)
    }
})



router.post('/add_expense',protect,  async (req, res)=>
{
    console.log(req.body)
    if(req.body.groupId){
        const group = await Group.findById(req.body.groupId);
        group.totalExpences = parseInt(group.totalExpences)+parseInt(req.body.amount);
        await group.save();
    }
    User.findById(req.body.paidby, async (err, result)=>
    {
        for (var i=0;i<result.balances.length;i++)
        {
            console.log("Balance uid: "+ result.balances[i].uid)
            console.log("Recipent Uid is: "+ req.body.recipent)
            console.log("Boolean:", result.balances[i].uid==req.body.recipent)
            if (result.balances[i].uid==req.body.recipent)
            {
                console.log('This runs')
                if(req.body.clear===1){
                    result.balances[i].balance=0;
                }else{
                    result.balances[i].balance=result.balances[i].balance+parseInt(req.body.amount)
                }
                result.save((err)=>
                {
                    if (err)
                    {
                        console.log(err)
                    }
                    else
                    {
                        console.log("The save was successful")
                    }
                })
            }

        }
    })
    User.findById(req.body.recipent, async (err, result)=>
    {
        for (var i=0;i<result.balances.length;i++)
        {
            if (result.balances[i].uid==req.body.paidby)
            {
                console.log('This runs too')
                console.log()
                if(req.body.clear===1){
                    result.balances[i].balance=0;
                }else{
                    result.balances[i].balance=result.balances[i].balance-parseInt(req.body.amount)
                }
                result.save((err)=>
                {
                    if (err)
                    {
                        console.log(err)
                    }
                    else
                    {
                        console.log("The second save was successful as well")
                    }
                })
            }

        }
    })

    User.findById(req.body.paidby).populate({path: 'balances', populate:{path:'uid'}})
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


router.post('/split_expense',protect, (req, res)=>
{
    console.log(req.body)
    const numOfFriends=req.body["recipent"].length+1
    var equalSplitShare=parseInt(req.body.amount)/numOfFriends
    equalSplitShare=(parseInt(req.body.amount)-equalSplitShare)/(numOfFriends-1)
    //console.log("recipent id 1: "+ req.body["recipent"][1])
    for (let j=0;j<numOfFriends-1;j++)
    {
        User.findById(req.body.paidby, async (err, result)=>
        {
            for (var i=0;i<result.balances.length;i++)
            {
                console.log("Balance uid: "+ result.balances[i].uid)
                console.log("Recipent Uid is: "+ req.body["recipent"][j])
                console.log("Boolean:", result.balances[i].uid==req.body["recipent"][j])
                if (result.balances[i].uid===req.body["recipent"][j])
                {
                    console.log('This runs')
                    result.balances[i].balance=result.balances[i].balance+equalSplitShare
                    result.save((err)=>
                    {
                        if (err)
                        {
                            console.log(err)
                        }
                        else
                        {
                            console.log("The save was successful")
                        }
                    })
                }

            }
        })

        User.findById(req.body.recipent[j], async (err, result)=>
        {
            for (var i=0;i<result.balances.length;i++)
            {
                if (result.balances[i].uid==req.body.paidby)
                {
                    console.log('This runs too')
                    console.log()
                    result.balances[i].balance=result.balances[i].balance-equalSplitShare
                    result.save((err)=>
                    {
                        if (err)
                        {
                            console.log(err)
                        }
                        else
                        {
                            console.log("The second save was successful as well")
                        }
                    })
                }

            }
        })
    }
    res.json({message: "success"})

    
})


router.post('/addFriend', protect, async (req, res)=>
{
    console.log(`inside add friend ${req.body.email}`)
    const { id, email} = req.body;
    const personName2 = await User.findOne({email});
    const person2Id = personName2._id;
    console.log(`inside addFriend.....${req.body.id}, ${email}, ${person2Id}`);
    User.findById(id, (err, person)=>
    {
        if (err)
        {
            return res.json(err)
        }
        else
        {
            if (!person.friends.includes(person2Id))
            {
                person.friends.push(person2Id)
                /*var personName=User.findById(req.body.person2, (err,  result)=>
                {
                    return result.first_name
                })*/
                
                person.balances.push({uid: person2Id, name: personName2.firstName, balance: 0})
                person.save()
            }
            
            
        }
    })

    const personName1=await User.findById(id)
    User.findById(person2Id, (err, person)=>
    {
        if (err)
        {
            return res.json(err)
        }
        else
        {
            if (!person.friends.includes(id))
            {
                person.friends.push(id)
                
                /* var personName=User.findById(req.body.person1, (err,  result)=>
                {
                    return result.first_name
                })*/
                person.balances.push({uid: id, name: personName1.firstName, balance:0})
                person.save()
            }
            
            
        }
    })

    
    console.log('starting.....')
    User.findById(id).populate({path: 'balances', populate:{path:'uid'}}).populate('groups', 'name groupType totalExpences groupImage').exec((err, result)=>
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

router.get('/findusers', async (req, res)=>
{
    
    const data=await User.find()
    console.log(data)
    res.json(data)
})

module.exports=router