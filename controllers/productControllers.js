const Product = require('../models/product')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')


// Create a new Product => /api/v1/admin/product/new

exports.newProduct = catchAsyncErrors (async ( req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
})


exports.getProduct = catchAsyncErrors (async ( req, res, next) =>{

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
})

// get single product detail

exports.getSingleProduct = catchAsyncErrors (async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product){
        return next(new ErrorHandler("Product Not Found" , 404));
       
    }
    res.status(200).json({
        success: true,
        product
    })
})

// update product
exports.updateProduct =catchAsyncErrors (async (req, res, next) =>{

    const product = await Product.findById(req.params.id);

    if (!product){
        return next(new ErrorHandler("Product Not Found" , 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    
    res.status(200).json({
        success: true,
        product
    })
    
})

// Delete product

exports.deleteProduct = catchAsyncErrors (async (req, res, next) => {
      const product = await Product.findById(req.params.id);

      if(!product) {
        return next(new ErrorHandler("Product Not Found" , 404));
      }

      await product.remove();
      res.status(200).json({
        success: true,
        message: "product is Deleted"

      })
})