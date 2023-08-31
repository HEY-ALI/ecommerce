const Product = require("../models/productModel");




//create product
exports.createProduct = async (req,res,next)=>{

    const product = await Product.create(req.body);

    req.status(201).json({
        success:true,
        product     
    })
}


exports.getAllProducts = (req,res)=>{
    res.status(200).json({message:"Route is working fine"})
}
