import express, { json } from 'express';
const router = express.Router();
import User from '../models/User.js';
import Post from '../models/Post.js';



//CREATE NEW POST
router.post("/create", async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            photo: req.body.photo,
            username: req.body.username,
            categories: req.body.categories,
        });


        const post = await newPost.save();
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err)
    }


});

//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true})
                res.status(200).json(updatedPost);
            } catch (err) {
                es.status(500).json(err);
            }
        }else{
            res.status(401).json("You can update only your account!")
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.username === req.body.username) {
            try {
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("Post has been deleted!");
            } catch (err) {
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can delete only your post!")
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET A POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    const username = req.query.user;
    const categoryName = req.query.cat;
    let posts;
    try{
        if(username){
            posts = await Post.find({username:username});
        }else if(categoryName){
            posts = await Post.find({
                categories: {
                    $in: [categoryName]
                }
            })
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts)
    }catch(err){
        res.status(500).json(err)
    }
    
});


export default router;