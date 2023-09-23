import React from 'react'

interface TextInputProps {
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}

export function TextInput({name, onChange, placeholder}: TextInputProps) {
    const capitalizedName = `${name[0].toUpperCase()}${name.slice(1)}`;
    const inputPlaceholder = placeholder || capitalizedName;

  return (
    <input 
    id={name}
    type="text" 
    placeholder={inputPlaceholder} 
    value={name} 
    onChange={onChange} 
    className='border-slate-500 border rounded-lg bg-slate-900 text-slate-200 p-2 m-2 w-60'
    />
  )
}
