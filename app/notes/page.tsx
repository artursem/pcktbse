import React from 'react'
import PocketBase from 'pocketbase';
import Link from 'next/link';

// Components
import { NoteContainer } from './components/NoteContainer';

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
console.log(notes)

  return (
    <>
        {notes.items.map(({id, title, content}) => (
            <NoteContainer key={id} id={id} title={title} content={content} />
        ))}
    </>
  )
}
