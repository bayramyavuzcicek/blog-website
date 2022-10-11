import express from 'express';
const app = express();



//middlewares
app.use(express.json());


app.listen(5000, () => {
    console.log("Backend is running")
});