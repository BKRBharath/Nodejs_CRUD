const ecpress = require('express');
const router = ecpress.Router();
const User = require('../models/products');

router.post("/add-product", async (req,res)=>{
    try{
        const newProduct = new User({
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

module.exports = router;



























module.exports = router;