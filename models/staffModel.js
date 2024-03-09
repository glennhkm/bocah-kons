import mongoose from "mongoose";

const Staff = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    periode: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})

export default mongoose.model("Staff", Staff);