import { NextResponse } from 'next/server';
import PostModel from '../../../models/postName';

interface QueueEntry {
    queue: number;
    createdAt: string;
}

export async function GET() {
    try {
        console.log('Fetching last queue entry...');
        const lastEntryQueue = await PostModel.findOne().sort({ createdAt: -1 }).exec();
        console.log('Fetched last entry:', lastEntryQueue);

        if (!lastEntryQueue) {
            const response: QueueEntry = {
                queue: 0,
                createdAt: new Date().toISOString(),
            };
            return NextResponse.json(response, { status: 200 });
        }

        const response: QueueEntry = {
            queue: lastEntryQueue.queue,
            createdAt: lastEntryQueue.createdAt.toISOString(),
        };

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error('Error fetching the last queue:', error);
        return NextResponse.json({ error: 'Failed to fetch the last queue' }, { status: 500 });
    }
}
