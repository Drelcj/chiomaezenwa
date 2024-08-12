"use client";
import React, { useState } from 'react';
import JoditEditor from "jodit-react";
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CreatePost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const handleSaveAsDraft = async () => {
    try {
      const response = await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, status: 'draft' }),
      });

      if (!response.ok) {
        throw new Error('Failed to save draft');
      }

      alert('Draft saved successfully.');
    } catch (error) {
      console.error("Error saving draft", error);
      alert('Failed to save draft.');
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, status: 'published' }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit post');
      }

      alert('Post submitted successfully.');
      router.push('/blog');
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('Failed to submit post.');
    }
  };

  return (
    <div>
      <h1>Create a Post!</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <JoditEditor
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <Button onClick={handleSaveAsDraft}>Save as Draft</Button>
      <Button onClick={handleSubmit}>Submit</Button>
      <button className="btn bg-red-500 text-white">
        <Link href="/">Cancel</Link>
      </button>
    </div>
  );
}
