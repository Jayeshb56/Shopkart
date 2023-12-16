const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please enter Product name'],
        trim: true,
        maxLength: [100,'product name cannot exceed  100 Charaters ']
    },
    prize: {
        type: Number,
        required: [true,'Please enter Product prize'],
        maxLength: [5,'product prize cannot exceed  5 Charaters '],
       
    },
    description: {
        type: String,
        required: [true,'Please enter Product description'],
       
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
        public_id: {
            type: String,
          
        },
        url:{
            type: String,
            
        },
    }
    ],
    category: {
        type: String,
        required : [true, 'please select category for this product'],
        enum: {
            values: [
                'Electronics',
                'Camera',
                'Laptop',
                'Headphone',
                'Clothes/Shoes',
                'Outdoor',
                'Sports',
                'Books',
                'Food',
                'Bag'
            ],
            message: "Please select correct Catagory for products"
        }
    },
    seller:{
        type : String,
        required : [true,'please enter product seller']
    },
    stock : {
        type : Number,
        required: [true, 'please enter product Stocks'],
        maxLength: [5,'stock count cannot exceed 5 count'],
        default: 0
    },
    numofReviews: {
        type : Number,
        default : 0
    },
    reviews: [
        {
            name: {
                type : String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: { 
                type: String,
                required:true
            }
            
        }
    ],
    createdAt: {
        type: Date,
        default : Date.now
    }
})


 module.exports = mongoose.model('Product' , productSchema);