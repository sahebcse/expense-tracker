require('dotenv').config({path:"./config.env"});
const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')

//const CONNECTION_URL= 'mongodb+srv://USERNAME:PASSWORD@cluster0.jwg85.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const CONNECTION_URL='mongodb://localhost/splitdemo4' 
const port=5000||process.env.PORT

const helpers=require('./helpers/mongofunctions')
const addFriend=helpers.addFriend

const  varx=1323424
const Schema=mongoose.Schema;

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
//Hey 
//Models
const User=require('./models/user.model')
const Group=require('./models/group.model')

//Routes
const sitesRoutes=require('./routes/site.routes')
const userRoutes=require('./routes/user.routes')
const groupRoutes=require('./routes/group.routes')


app.use('/', sitesRoutes)
app.use('/', userRoutes)
app.use('/', groupRoutes)

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(port, ()=>{console.log(`server up and running on port ${port}`)}))
    .catch((err)=>{console.log(err.message)});