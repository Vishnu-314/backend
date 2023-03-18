const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const todoSchema=new Schema({
    task:{
        type:String,
        required:true
    }
})

const Todo=mongoose.model("todos",todoSchema);

module.exports=Todo