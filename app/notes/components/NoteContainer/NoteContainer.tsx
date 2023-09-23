import React from 'react'
import Link from 'next/link'

// Types
import { Note } from './types'

interface NoteProps {
    id: string;
    content: string;
    title: string;
}

export const NoteContainer = ({ id, content, title }: NoteProps) => {

  return (
    <div className='rounded bg-slate-700 m-4 p-3'>
    <h4 className='text-2xl font-bold text-slate-100'>{title}</h4>
    <p className='text-slate-200'>{content}</p>
    <Link href={`/notes/${id}`} className='font-bold text-slate-500 text-sm'>read more <span className="font-black">&gt;</span> </Link>
    </div>
  )
}
