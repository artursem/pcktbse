'use client';

import React from 'react'
import { AddNote } from '../components/AddNote'

const AddNotePage = () => {
  return (
    <>
    <h3 className='text-slate-300 font-bold m-4'>Create</h3>
    <AddNote />
    </>
  )
}

export default AddNotePage