const express = require('express');
const router = ecpress.Router();
const Product = require('../models/products');

router.post("/add-product", async (req,res)=>{
    try{
        const newProduct = new Product({
            name : req.body.name,
            price : req.body.price,
            description : req.body.description
        })
        await newProduct.save();
        res.status(201).json({message : "Product added successfully", product: newProduct});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.get("/products", async (req,res)=>{
    try{
<<<<<<< HEAD
        const products = await Product.find();
=======
        const products = await User.find(); 
>>>>>>> sub_branch
        res.status(200).json({message : "Products retrieved successfully", products: products});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
<<<<<<< HEAD
})

router.put("/update-product/:id", async (req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
            req.body
        , {new: true});
        return res.status(200).json({message : "Product updated successfully", product: updatedProduct});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
})

router.delete("/delete-product/:id", async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({message : "Product deleted successfully"});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
})
=======
});

router.put("/update-product/:id", async (req,res)=>{
    try{
        const updatedProduct = await User.findByIdAndUpdate(req.params.id,
            req.body
            , { "new": true });
            res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
});

router.delete("/delete-product/:id", async (req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
});
>>>>>>> sub_branch

module.exports = router;
