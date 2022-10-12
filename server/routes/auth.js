import express from 'express';
const router = express.Router();
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

//REGISTER
router.post("/register", async (req, res) => {

    try {
        //hashing the password
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
        //assigned user info
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        //create user
        const user = await newUser.save();
        res.status(200).json(user);
    }

    catch (err) {
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login", async (req,res)=>{
    try {
        //compare username
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("Wrong Credentials");

        //compare password
        const isPassword = await bcrypt.compareSync(req.body.password, user.password);
        !isPassword && res.status(400).json("Wrong password");
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(404).json("User not found")
    }
})
export default router;