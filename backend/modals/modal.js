/* const mongoose=require("mongoose");
const{Schema}=mongoose;

const userpractice = new Schema({
    fname:{
    name:String,
    required:true
    },
    password:{
        password:String,
        required:true
    }
});

const sisindri=mongoose.model('sisindri',userpractice);

module.exports=sisindri;
 */



const mongoose = require("mongoose");
const { Schema } = mongoose;

const userpracticeSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const sisindri = mongoose.model('sisindri', userpracticeSchema);

module.exports = sisindri;
