import { NextResponse } from 'next/server';
// export const runtime = 'edge';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const iterations = 200000000;
  let randomSum= 0
  for(let i=0; i<iterations; i=i+1){
    randomSum += Math.random();
  }

  return new NextResponse(`I am a Serverless Function! ${randomSum} ${searchParams} `, {
    status: 200,
  });
}