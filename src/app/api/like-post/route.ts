// // src/app/api/like-post/route.ts
// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(request: Request) {
//   const { postId } = await request.json();
//   try {
//     const post = await prisma.post.update({
//       where: { id: postId },
//       data: { likes: { increment: 1 } },
//     });
//     return NextResponse.json(post, { status: 200 });
//   } catch (error) {
//     console.error('Error liking post:', error);
//     return NextResponse.json({ error: 'An error occurred while liking the post.' }, { status: 500 });
//   }
// }
