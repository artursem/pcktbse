import React from 'react'
import Link from 'next/link';
import { pb } from "@/app/lib/pocketbase"

// Components
import { NoteContainer } from './components/NoteContainer';

export const dynamic = 'auto',
 dynamicParams = true, 
 revalidate = 10, 
 fetchCache = 'auto', 
 runtime = 'nodejs', 
 preferredRegion = 'auto';


async function getNotes() {

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
    <div className='m-4'>
        {notes.items.map(({id, title, content}) => (
            <NoteContainer key={id} id={id} title={title} content={content} />
        ))}
        <Link href="notes/add" className='font-bold text-slate-500 text-sm'>add note <span className="font-black">&gt;</span> </Link>
    </div>
  )
}
