import React from 'react'
import PocketBase from 'pocketbase';
import Link from 'next/link';

export const dynamic = 'auto',
 dynamicParams = true, 
 revalidate = 10, 
 fetchCache = 'auto', 
 runtime = 'nodejs', 
 preferredRegion = 'auto';


async function getNotes() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const resultList = await pb.collection('notes')
  
  return resultList?.getList(0, 10)
}

interface Note {
    id: string;
    title: string;
    content: string;
}
export default async  function NotesPage() {
const notes = await getNotes()

  return (
    <>
        {notes.items.map((note) => (
            <div key={note.id} style={{borderRadius: '6px', backgroundColor: '#4d4d4d', margin: '1rem', padding: '12px'}}>
            <h4 className='text-2xl font-bold'>{note.title}</h4>
            <p>{note.content}</p>
            <Link href={`/notes/${note.id}`} className='font-bold'>read more</Link>
            </div>
        ))}
    </>
  )
}