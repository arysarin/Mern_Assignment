const express=require('express');
const app =express();//app is an instance of the express
const port=3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/cart.json');
});
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});
