const express=require('express');
const fs=require('fs');
const cart=require('/cart.json');
const app =express();//app is an instance of the express
const port=2006;

app.get('/:data',(req,res)=>{
    const cart=JSON.parse(fs.readFileSync(__dirname+"/cart.jason"));
    const id=req.params.data;
    cart=cart.filter(items=>items.id== id);
    res.send(cart);
});

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});