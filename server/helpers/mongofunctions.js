const mongoose=require('mongoose')
const User=require('../models/user.model')
const Group=require('../models/group.model')

//Mongoose Functions
const addExpense=(parentUser, amount, secondaryUser)=>
{
    User.findById(parentUser, async (err, result)=>
        {
            for (var i=0;i<result.balances.length;i++)
            {
                //console.log("Balance uid: "+ result.balances[i].uid)
                //console.log("Recipent Uid is: "+ req.body.recipent)
                //console.log("Boolean:", result.balances[i].uid==req.body.recipent)
                if (result.balances[i].uid==secondaryUser)
                {
                    console.log('This runs')
                    result.balances[i].balance=result.balances[i].balance+amount
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
}

const subExpense=(parentUser, amount, secondaryUser)=>
{
    User.findById(parentUser, async (err, result)=>
        {
            for (var i=0;i<result.balances.length;i++)
            {
                //console.log("Balance uid: "+ result.balances[i].uid)
                //console.log("Recipent Uid is: "+ req.body.recipent)
                //console.log("Boolean:", result.balances[i].uid==req.body.recipent)
                if (result.balances[i].uid==secondaryUser)
                {
                    console.log('This runs')
                    result.balances[i].balance=result.balances[i].balance-amount
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
}


const addFriend=async (person1, person2)=>
{
    console.log("The Add friend starts running")
    const personName2=await User.findById(person2)
    User.findById(person1, (err, person)=>
    {
        if (err)
        {
            return res.json(err)
        }
        else
        {
            if (!person.friends.includes(person2))
            {
                person.friends.push(person2)
                /*var personName=User.findById(req.body.person2, (err,  result)=>
                {
                    return result.first_name
                })*/
                
                person.balances.push({uid: person2, name: personName2.first_name, balance: 0})
                person.save()
            }
            
            
        }
    })

    const personName1=await User.findById(person1)
    User.findById(person2, (err, person)=>
    {
        if (err)
        {
            return res.json(err)
        }
        else
        {
            if (!person.friends.includes(person1))
            {
                person.friends.push(person1)
                
                /* var personName=User.findById(req.body.person1, (err,  result)=>
                {
                    return result.first_name
                })*/
                person.balances.push({uid: person1, name: personName1.first_name, balance:0})
                person.save()
            }
            
            
        }
    })
}

const appendGroup=(groupId, userId)=>
{
    var tempUser;
    User.findById(userId, async (err, user)=>
    {
        if (err)
        {
            console.log(err)
            return ({message: "error"})
        }
        else
        {
            if (!user.groups.includes(groupId))
            {
                user.groups.push(groupId)
                tempUser=await user.save()
                
                
            }
        }

    })
    return tempUser
}

module.exports={
    addFriend, addExpense, appendGroup
}