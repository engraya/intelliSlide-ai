import React from 'react'

function PagesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col items-center justify-center gap-10 container py-5 md:py-12 lg:py-24'>
      {children}
    </div>
  )
}

export default PagesWrapper
