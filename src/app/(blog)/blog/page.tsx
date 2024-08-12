// src/app/blog/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

interface Post {
  id: string;
  imageUrl: string;
  title: string;
  content: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/get-posts');
        const data = await response.json();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='mt-16'>
      <h1>Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(posts) && posts.map((post) => (
          <div key={post.id} className="card">
              {post.imageUrl && ( 
              <Image 
              src={post.imageUrl}
              alt={post.title}
              width={300}
              height={200}
              className="card-img"
              />
              )}
              
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link href={`/blog/${post.id}`}>
              <button className="btn text-white bg-red-500">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
