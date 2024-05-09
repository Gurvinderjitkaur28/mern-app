const express=require("express")
const users=require("./MOCK_DATA.json")
const app=express()

app.get('/users/name',(req,res)=>{
// const names = users.map(item =>`<li>${item.first_name} ${item.last_name} </li> `).join('');
    //  const ut=`<ul>${names}</ul>`
    //  res.send(ut);
const names=
`<ul>${users.map(item=>`<li>${item.first_name}</li>`).join('')}</ul>`
res.send(names)

})

app.get('/api/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users.find(user=>user.id==id);
   return res.send(user)
})



app.get('/api/users',(req,res)=>{
   return res.json(users)
})


//?TODO CREATE USERS
app.post('/api/users',(req,res)=>{
    res.send({status:'pending'})
})


app.patch('/api/users/:id',(req,res)=>{
    res.send({status:'pending'})
})

app.delete('/api/users/:id',(req,res)=>{
    res.send({status:'pending'})
})

app.listen(4000 , ()=>{
    console.log("server is running")

})