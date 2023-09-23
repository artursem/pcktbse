import React from 'react'

interface ButtonProps {
    label: string

}

export const Button = ({label}: ButtonProps) => {
  return (
    <button 
    type="submit"
    className='border-slate-500 border rounded-lg bg-slate-700 hover:bg-slate-900 text-slate-200 p-2 m-2 w-60'
    >{label}</button>
  )
}
