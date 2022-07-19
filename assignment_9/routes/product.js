const express = require('express');
const fs= require('fs');
const {uuid}=require('uuidv4');
const {Product} = require('../Product');
const router = express.Router();


                            /** List */

router.get('/',(req,res)=>{
    try{ 
         const filearray = fs.readdirSync(__dirname);//read directory where we're in
         let products = [];
         let message ='';
         if(filearray.includes("products.json"));
             products = JSON.parse(fs.readFileSync('products.json'));//only read if file exists
         if(products.length>0)
             message = 'products fetched successfully';
         else
             message = 'No products found';
         return res.status(200).json({
             message:"products fetched successfully",
             products
         
         })  
     }
     catch(err){
         return res.status(500).json({
             message: message,
             error : err.message
         })
     }
 })

 router.get('/:id',(req,res)=>{
     try{
        const{id} = req.params;
        /**getting contents of directory to check for file products.json*/
        const filearray = fs.readdirSync(__dirname);//read directory where we're in
        let products;
        let error ='';
        /**checking for file products.json exists in directory or not*/
        if(filearray.includes("products.json"));
            products = JSON.parse(fs.readFileSync('products.json'));
        products = products.filter(item=>item.id == id);
        if(products.length>0)
             message = 'products fetched successfully';
         else
             message = 'No products found';
            
        return res.status(200).json({//201 since something new has been added
            message : "Product fetched successfully",
            products
        })
        
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error : err.message
        })
    }

})

 
                            /**  Add */

 router.post("/add",(req,res)=>{
     try{
         /**getting contents of directory to check for file products.json*/
         const filearray = fs.readdirSync(__dirname);//read directory where we're in
         let products = [];
         let error ='';
         /**checking for file products.json exists in directory or not*/
         if(filearray.includes("products.json"));
             products = JSON.parse(fs.readFileSync('products.json'));
         /**reading input for product objects*/
         const { product_name,product_price,product_desc,product_img}= req.body;
         /**creating product object*/
         //npm install uuidv4 for generating random unoque ids
         if(product_name==''&&error ==''){
             error = 'Missing product Name';
             res.status(400).json({// 400 bad request
                 message:error
             })
         }
         const product = new Product(uuid(),product_name,product_price,product_desc,product_img);
         /**add it to the existing product array read from products.json */
         products = [...products,product];
 
         fs.writeFile('products.json',JSON.stringify(products),(err)=>{
             if(err)
                 res.status(500).json({
                     message : 'Something wrong while writing file',
                     error:err
                 })
             res.status(200).json({
                 message:'product saved successfully',
                 product
             })
         })
     }catch(err){
         res.status(500).json({
             message: "Something went wrong",
             error : err.message
         })
     }
 })


                        /** update enitre object*/
router.put("/update/:id",(req,res)=>{
    try{
        let {id} = req.params;
        let{product_name,product_price,product_desc,product_img} = req.body;
        /**getting contents of directory to check for file products.json*/
        const filearray = fs.readdirSync(__dirname);//read directory where we're in
        let products;
        let error ='';
        /**checking for file products.json exists in directory or not*/
        if(filearray.includes("products.json"));
            products = JSON.parse(fs.readFileSync('products.json'));
        products = products.filter(item=>item.id != id);
        const product = new Product(uuid(),product_name,product_price,product_desc,product_img);
        /**add it to the existing product array read from products.json */
        products = [...products,product];
        fs.writeFile('products.json',JSON.stringify(products),(err)=>{
            if(err)
                res.status(500).json({
                    message : 'Something wrong while writing file',
                    error:err
                })
            res.status(201).json({//since something new has been added
                message:'product saved successfully',
                product
            })
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error : err.message
        })
    }


})
 

                        /** delete */

 router.delete('/delete/:id',(req,res)=>{
    try{
        const{id} = req.params;
        /**getting contents of directory to check for file products.json*/
        const filearray = fs.readdirSync(__dirname);//read directory where we're in
        let products;
        let error ='';
        /**checking for file products.json exists in directory or not*/
        if(filearray.includes("products.json"));
            products = JSON.parse(fs.readFileSync('products.json'));
        products = products.filter(item=>item.id != id);
        fs.writeFile('products.json',JSON.stringify(products),(err)=>{
            if(err)
                return res.status(500).json({
                    message : "Something went wrong",
                    error : err
                })
            return res.status(201).json({//201 since something new has been added
                message : "Product deleted successfully",
            })
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error : err.message
        })
    }
}
)
 module.exports = router;