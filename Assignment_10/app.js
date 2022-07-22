const express = require('express');
const productroutes = require('./routes/product_db');
const app = express();
const port = 8080; 
const {dbConn} = require('./config/db');

app.use(express.json());
app.use(productroutes);
dbConn();
app.listen(port, () =>{
    console.log(`**************Listening to port ${port}***************`);
})