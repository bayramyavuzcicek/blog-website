import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true,
        unique: true,
    },
    description: {
        type: string,
        required: true,
    },
    photo: {
        type: string,
        required: false,
    },
    username: {
        type: string,
        required: true,
    },
    categories: {
        type: Array,
        required: false
    },
}, { timestamps: true })

export default mongoose.model("Post", PostSchema);