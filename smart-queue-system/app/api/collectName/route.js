import connectDB from '../../../config/database';
import { saveName } from '../../../actions/saveName';

export async function POST(request) {
  console.log('Received a POST request');
  try {
    await connectDB();
    const { userName } = await request.json();
    console.log('UserName:', userName);

    const result = await saveName(userName);

    if (result.success) {
      return new Response(JSON.stringify({ message: result.message }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: result.message, error: result.error }), { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error', error }), { status: 500 });
  }
}

