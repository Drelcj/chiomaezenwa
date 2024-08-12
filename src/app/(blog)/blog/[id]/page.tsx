// src/app/blog/[id]/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';


interface PostPageProps {
    params: { id: string }
  }
  
  const PostPage: React.FC<PostPageProps> = ({ params }) => {
    const { id } = params;
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/get-posts/${id}`);
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className='mt-16'>
      <h1>{post.title}</h1>
      {/* <img src={post.imageUrl} alt={post.title} /> */}
      {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostPage;
