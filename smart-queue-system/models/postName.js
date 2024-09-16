import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
}, { timestamps: false });

const PostModel = models.post || model('post', postSchema);

export default PostModel;