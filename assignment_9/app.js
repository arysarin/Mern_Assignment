const express = require('express');
const productRoutes = require('./routes/product');

const app = express();

const port = 4000;
app.use(express.json());

app.use(productRoutes);


app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})