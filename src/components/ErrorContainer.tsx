import React from 'react'

function ErrorContainer({ error }: { error: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-red-300 p-2 text-white shadow-xl shadow-red-400/30 dark:text-black">
      <div className="flex w-full flex-col items-center justify-around gap-1">
        <div className="whitespace-nowrap font-serif text-sm font-semibold uppercase text-red-800 dark:text-red-400">
          {error}
        </div>
      </div>
    </div>
  )
}

export default ErrorContainer
