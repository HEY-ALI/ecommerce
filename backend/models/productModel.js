const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter  product name"]
    },
    description:{
        type:String,
        required:[true, "Please enter  product description"]
    }, 
    price:{
        type:Number,
        required:[true, "Please enter  product price"],
        maxLength:[8,"price can not exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[{
        public_id:{
            type:String,
            required: true
        },
        url:{
            type:String,
            required:true
        }}
    ],
    catagory:{
         type:String,
         required:[true, "please enter product catagory"]
    },
    stock:{
         type:Number,
         required:[true, "please enter product stock"],
         maxLenght:[4,"stock can not exceed 4 characters"],
         default:1
    },
    numOfReviews:{
         type:Number,
         default:0
    },
    reviews:[
        {
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
            }

        }
    ],
    createdAt:{
         type:Date,
         default:Date.now
    }
    
})

module.exports = mongoose.model("Product", productSchema);

