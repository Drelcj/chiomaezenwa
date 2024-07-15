"use client";
import React from 'react'
import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import { Button } from '@/components/ui/button';
import Link from 'next/link';




export default function CreatePost() {
    const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div> <h1> Create a Post! </h1>
        <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <Button>Submit</Button> 
      <button className="btn bg-red-500 text-white"><Link href="/abou"> Save as draft</Link></button>
    </div>
  )
}
