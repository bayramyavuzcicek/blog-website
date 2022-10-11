import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();

dotenv.config();

//DB connection
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to mongoDB")).catch((err) => { console.log(err) });

//middlewares
app.use(express.json());


app.listen(5000, () => {
    console.log("Backend is running")
});