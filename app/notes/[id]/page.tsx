import React from 'react'
import PocketBase from 'pocketbase';

export const revalidate = 10

async function getNote(noteId: string) {
    // const pb = new PocketBase('http://127.0.0.1:8090');
    // const result = await pb.collection('notes').getOne(noteId)
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, 
    {
        next: {revalidate: 10}
    })
    const data = await res.json()

    return data; 
}

export default async  function SingleNotePage ({params}: any) {
const note = await getNote(params.id)

  return (
    <div>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
    </div>
  )
}

