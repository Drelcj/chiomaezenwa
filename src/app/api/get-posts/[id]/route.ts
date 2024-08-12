// src/app/api/get-post/[id]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const url = new URL(req.url);
//   const id = url.searchParams.get('id');
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id: id }, // Ensure id is treated as a string
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'An error occurred while fetching the post.' }, { status: 500 });
  }
}
