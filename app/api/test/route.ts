import { NextResponse } from 'next/server';
// export const runtime = 'edge';

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const iterations = 10000000;
  const randomSum = Array(iterations).reduce((obj, _value)=>{
    return Math.random() + obj;
  }, 0);
  
  return new NextResponse(`I am a Serverless Function! ${randomSum} ${searchParams} `, {
    status: 200,
  });
}