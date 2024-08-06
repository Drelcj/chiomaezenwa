"use client";
import React, { useState } from 'react';
import JoditEditor from "jodit-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CreatePost() {
  const [content, setContent] = useState<string>("");

  const handleSaveAsDraft = async () => {
    try {
      // Send the content to the backend (API route)
      await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, status: 'draft' }),
      });

      // Handle the response (show a success message)
      console.log('Draft saved successfully.');
    } catch (error) {
      console.error("Error saving draft", error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Send the content to your backend (API route)
      await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, status: 'published' }),
      });

      // Handle the response (show a success message)
      console.log('Post submitted successfully.');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div>
      <h1>Create a Post!</h1>
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
