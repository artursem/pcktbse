import React from 'react'

function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='m-4'>
        {children}
    </div>
  )
}

export default layout