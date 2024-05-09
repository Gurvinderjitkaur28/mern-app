const express=require("express")
const mongoose=require('mongoose')
const users=require("./MOCK_DATA.json")
const fs=require("fs")
const app=express()
//!Connect to mongodb...
connectMongoDb('mongodb://localhost:27017/User-App')
.then(()=>{
    console.log("connected to MongoDb")
})
.catch((err)=>{
    console.log("ERROR")
})

//! schema....
const userSchema=new mongoose.Schema({
    first_name:{
       type:String,
       required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    job_title:{
        type:String,
        required:true
    }
    

})
// MODELS......

const User=mongoose.model('User',userSchema)

//!MIDDLEWARE=> JUST PULGING
app.use(express.urlencoded({extended:false}))

//! miidleware 1
// app.use((req,res,next)=>{
//     console.log("middleware 1")
//     res.send({msg:"middleware 1 executed"})
//     next();
// })
app.get('/users/name',(req,res)=>{
const names=
`<ul>${users.map(item=>`<li>${item.first_name}</li>`).join('')}</ul>`
res.send(names)
})

app.get('/api/users',(req,res)=>{
   return res.json(users)
})


//?TODO CREATE USERS

app.post("/api/users", async (req, res) => {
    const body = req.body;
    try {
      const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
      });
      console.log("Results", result);
      return res.status(200).json({ msg: "Success!" });
    } catch (error) {
      return res.send("error");
    }
})
    .patch(async (req, res) => {
        //? TODO : Update a user
        await User.findByIdAndUpdate(req.params.id, { last_name: "changed" });
    
    
        return res.status(200).send({ status: "Updated" });
      })
      .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
    
    
        res.send({ status: "Deleted Successfully" });
      });
  

  

// app.post('/api/users',(req,res)=>{
//     const body=req.body
//     users.push({...body,id:users.length+1})
//     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"sucess",id:users.length})

//     })
//     console.log(body)
// })





// app.route('/api/users/:id').get((req,res)=>{
//         const id=req.params.id;
//         const user=users.find(user=>user.id==id);
//        return res.send(user)
//     })
//     .patch((req,res)=>{
        
//      res.send({status:'pending'})
//     })
//     .delete((req,res)=>{
//         res.send({status:'pending'})
//        })


app.listen(3000 , ()=>{
    console.log("server is running")

})