import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  return new Response('API route');
}