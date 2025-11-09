import { NextRequest } from 'next/server';

export const runtime = 'nodejs'; // ← ФОРСИРУЕМ NODEJS RUNTIME

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string[] } }
) {
  // Этот файл переопределяет runtime для страницы docs/[...slug]
}