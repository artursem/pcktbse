'use client';

import React, { useState } from 'react'
import { pb } from "@/app/lib/pocketbase"

// Components
import { Button } from '../Button';
import { TextInput } from '../TextInput';

export const AddNote = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const createNote = async() => {
        const data = {
            title,
            content
        }

      await pb.collection('notes').create(data);

    //     // await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify(data)
    //     // }) 
    }
    
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

  return (
    <form onSubmit={createNote} className='m-2 flex flex-col'>
        <TextInput name='title' value={title} onChange={handleTitleChange} />
        <TextInput name='content' value={content} onChange={handleContentChange} />
        <Button label='Create' />
    </form>
  )
}