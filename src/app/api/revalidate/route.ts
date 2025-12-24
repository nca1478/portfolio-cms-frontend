import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the secret token from headers or body
    const authHeader = request.headers.get('authorization');
    const secret = process.env.REVALIDATE_SECRET || 'default-secret';

    // Simple authentication check
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Revalidate the metadata cache
    revalidateTag('metadata');

    return NextResponse.json({
      message: 'Metadata cache revalidated successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error revalidating metadata cache:', error);
    return NextResponse.json(
      { message: 'Error revalidating cache' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Metadata revalidation endpoint',
    usage: 'POST with Authorization: Bearer <token>',
  });
}
