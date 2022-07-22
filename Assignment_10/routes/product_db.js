const express = require('express');
const router = express.Router();
const { Product } = require('../models/Product.js');
const { uuid }= require('uuidv4');  


router.get('/',async (req,res)=>{
    try{
        const product= await Product.find();
        return res.status(200).json({
            message: "Product retrived successfully",
            product
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error: err.message
        })
    }
})
router.post("/add",async (req,res)=>{
    try{
        const {product_name, product_price, product_desc, product_img} = req.body;
        if(product_name=='' && error == '' || product_name==undefined){
            error= 'No product name found!'
            res.status(400).json({
                message: error
            })
        }
        if(product_price=='' && error == '' || product_price ==undefined ){
            error= 'Product price not found!'
            res.status(400).json({
                message: error
            })
        }
        if(product_desc=='' && error == '' || product_desc==undefined){
            error= 'No product description found!'
            res.status(400).json({ 
                message: error
            })
        }
        if(product_img=='' && error == '' || product_img==undefined){
            error= 'No product image found!'
            res.status(400).json({
                message: error
            })
        }
        const projObj= {
            product_name,
            product_price,
            product_desc,
            product_img
        }
        const product= new Product(projObj); 
        await product.save()
        res.status(200).json({
            message: "Product added successfully",
            product
        })
    }catch(err){
        return res.status(500).json({
            message: "Something Went Wrong",
            error: err.message
        })
    }
})
router.put("/update/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const {product_name, product_price, product_desc, product_img} = req.body;
        if(product_name=='' && error == '' || product_name==undefined){
            error= 'No product name found!'
            res.status(400).json({
                message: error
            })
        }
        if(product_price=='' && error == '' || product_price ==undefined ){
            error= 'Product price not found!'
            res.status(400).json({
                message: error
            })
        }
        if(product_desc=='' && error == '' || product_desc==undefined){
            error= 'No product description found!'
            res.status(400).json({ 
                message: error
            })
        }
        if(product_img=='' && error == '' || product_img==undefined){
            error= 'No product image found!'
            res.status(400).json({
                message: error
            })
        }
        await Product.findByIdAndUpdate(id, { product_name, product_price, product_desc, product_img});
        return res.status(200).json({
            message:"Data updated successfully"
        })
    }catch(err){
        return res.status(500).json({
            message: "Something Went Wrong",
            error: err.message
        })
    }
})

router.delete('/delete/:id', async (req,res)=>{
    try{
        const id=req.params.id;
        await Product.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Data deleted successfully"
        })
    }catch(err){
        return res.status(500).json({
            message: "Something Went Wrong",
            error: err.message
        })
    }
})

module.exports=router;