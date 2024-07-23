"use client";
import React from 'react'
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient


export default function CreatePost() {
    // const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleSaveAsDraft = async () => {
    try {
      //Send the content to the backend ( API route )
      await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, draftStatus: 'draft'}),
      });

      //Handle the response ( show a success message )
      console.log('Draft saved successfully.');
    } catch (error) {
      console.error("Error saving draft", error);
    }
  };

  const handleSubmit = async () => {
    try {
      //send the content to your backend ( API route)
      await fetch('/api/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application//json',
        },
        body: JSON.stringify({ content, postStatus: 'published'}),
      });

      //Handle the error (e.g, show an error message )
      console.log('Post submitted successfully.');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div> <h1> Create a Post! </h1>
        <JoditEditor
        // ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    
      <Button onClick={handleSaveAsDraft}>Save as Draft</Button>
      <Button onClick={handleSubmit}>Submit</Button>
      <button className="btn bg-red-500 text-white">
        <Link href="">Cancel</Link>
      </button>
    </div>
  )
}
