import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  // Переопределяем runtime для этого route
}