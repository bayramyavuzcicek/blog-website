import express, { json } from 'express';
const router = express.Router();
import User from '../models/User.js';
import Post from '../models/Post.js';
import Category from '../models/Category.js';

//CREATE CATEGORY
router.post("/",async(req,res)=>{
    const newCategory = new Category({
        name:req.body.name
    })
    try{
        const category = await newCategory.save();
        res.json(category)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET ALL CATEGORIES
router.get("/", async (req, res) => {
    const categories  = await Category.find();
    if(categories == 0){
        res.status(404).json("Categories not found!")
    }
    else{
        res.json(categories)
    }
});


export default router;