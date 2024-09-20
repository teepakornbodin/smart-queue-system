import connectDB from '../../../config/database';
import PostName from '../../../models/postName';

// API to collect user name and queue from frontend
export async function POST(request) {
  console.log('Received a POST request');
  try {
    await connectDB();
    const { userName, queue } = await request.json();
    console.log('UserName:', userName, 'Queue:', queue);

    // Save name and queue to MongoDB
    const newPost = new PostName({ name: userName, queue });
    const result = await newPost.save();
    
    if (result) {
      return new Response(JSON.stringify({ message: 'Username and queue saved successfully' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Failed to save username and queue' }), { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error', error }), { status: 500 });
  }
}
