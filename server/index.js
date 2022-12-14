import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import categoryRouter from './routes/categories.js';
const app = express();
app.use(cors());
dotenv.config();

const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname,"/images")));

//DB connection
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to mongoDB")).catch((err) => { console.log(err) });

//upload images
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"images")
    },
    filename: (req,file,cb)=>{
        cb(null,req.body.name)
    }
});
const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image has been uploaded!");
})



//middlewares
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/categories",categoryRouter);

app.listen("5000", () => {
    console.log("Backend is running")
});