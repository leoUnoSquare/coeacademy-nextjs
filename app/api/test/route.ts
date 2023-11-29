export const runtime = 'edge';
export function GET(request: Request) {
  return new Response(`I am an Edge Function!`, {
    status: 200,
  });
}