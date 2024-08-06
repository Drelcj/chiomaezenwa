// src/app/api/create-post/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { content, status } = await req.json();
    
    const savedPost = await prisma.post.create({
      data: {
        title: "New Post",
        content,
        status,
      },
    });

    return NextResponse.json(savedPost, { status: 200 });
  } catch (error) {
    console.error('Error saving post:', error);
    return NextResponse.json({ error: 'An error occurred while saving the post.' }, { status: 500 });
  }
}
