'use server'

import PostName from "../models/postName";

export async function saveName(userName) {
    try {
        // Create a new post with the username
        const newPost = new PostName({
            name: userName,
        });

        // Save the post to the database
        const result = await newPost.save();
        console.log('Saved to MongoDB:', result);

        return { success: true, message: 'Username saved successfully' };
    } catch (error) {
        console.error('Error in saveName:', error);  // Log the error
        return { success: false, message: 'Error saving username', error };
    }
}