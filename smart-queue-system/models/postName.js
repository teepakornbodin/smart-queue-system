import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    queue: {
        type: Number,
        default: 1,
    }
}, { timestamps: true });

postSchema.index({ createdAt: -1 }); // Ensure indexing for sorting by createdAt

const PostModel = models.post || model('post', postSchema);

export default PostModel;
