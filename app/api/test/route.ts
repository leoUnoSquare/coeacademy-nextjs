import { NextResponse } from 'next/server';
export const runtime = 'edge';

export function POST(request: Request) {
  return new NextResponse(`I am a Serverless Function! ${process.env.GOOGLE_CLIENT_ID}`, {
    status: 200,
  });
}