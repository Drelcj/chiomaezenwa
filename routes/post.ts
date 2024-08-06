// routes/post.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.post('/create', async (req, res) => {
  const { title, content, status } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        status, // 'published' or 'draft'
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

export default router;
