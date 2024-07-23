// pages/api/create-post.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { content, draftStatus } = req.body; // Assuming your request body contains "content" and "draftStatus"
      
      // Save the content to your database using Prisma
      const savedPost = await prisma.post.create({
        data: {
          content,
          status: draftStatus, // Use "draftStatus" instead of "status"
          // Other fields you want to save (e.g., author, timestamp, etc.)
        },
      });

      res.status(200).json(savedPost);
    } catch (error) {
      console.error('Error saving post:', error);
      res.status(500).json({ error: 'An error occurred while saving the post.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
