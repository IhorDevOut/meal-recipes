import { useState } from 'react'

export function SearchBar ({ setSearchTerm, searchTerm, startSearch }) {
  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-teal-500 py-2'>

          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search Recipes'
            value={searchTerm}
            onChange={evt => setSearchTerm(evt.target.value)}
          />

          <button type='button' onClick={startSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
