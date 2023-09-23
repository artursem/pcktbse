import { redirect } from 'next/navigation'
import React from 'react'

export default function HomePage()   {
  redirect('/notes');
  
  return (
    <div>page</div>
  )
}
