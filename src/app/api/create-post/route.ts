// src/app/api/create-post/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, content, status } = await req.json(); // Extracting data from the request body
    
    const savedPost = await prisma.post.create({
      data: {
        title,
        content,
        status, // Using the extracted status field
        published: true,
      },
    });

    return NextResponse.json(savedPost, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error saving post:', error.message, error.stack);
    } else {
      console.error('Unknown error saving post:', error);
    }
    return NextResponse.json({ error: 'An error occurred while saving the post.' }, { status: 500 });
  }
}
