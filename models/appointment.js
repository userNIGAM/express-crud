import mongoose from "mongoose"

const appointmentSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    phone:{
        type : String,
        required : true
    },
    itemType : {
        type : String,
        enum: ['Dell', 'HP', 'lenevo'],
        required : true
    },
    address : {
        type : String,
        required : true,
        trim : true,
    },
    date : {
        type : Date,
        required : true,   
    },
    description: {
        type : String,
        required : true,
        trim : true
    },
    file : {
        type : [String],
        required : true,
    },
    condition :{
        enum : ['normal', ' urgent', 'notsure'],
        required : true
    }

})