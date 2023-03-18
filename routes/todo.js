const express=require("express");
const Todo=require("../models/todo");
const router=express.Router();

router.get("/",async(req,res)=>{
    res.json({result:await Todo.find()})
})

router.post("/",async(req,res)=>{
    const {task}=req.body
    const todo=new Todo({
        task
    })
    try{
        const response=await todo.save();
        res.json({message:"todo added",response})
    }catch(e){
        res.json({message:"something went wrong",response:e})
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const  deletedTodo=await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
          }
        res.json({message:'todo deleted',deletedTodo})
    }catch(e){
        res.json({message:"something went wrong",response:e})
    }
    
})

router.put("/edit/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {task}=req.body;
        const editTodo=await Todo.findByIdAndUpdate(
            id,
            {task},
            {new:true}
            );
            if(!editTodo){
                return res.status(404).json({message:"todo not found"})
            }
            res.json({message:"todo updated",editTodo})
    }catch(e){
        console.error(e.message);
        res.status(500).send("internal erver error")
    }
})

module.exports=router

