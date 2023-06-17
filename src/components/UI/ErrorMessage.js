export function ErrorMessage ({ message }) {
  return (
    <div className='bg-red-500 text-white font-bold py-2 px-4 rounded max-w-lg mx-auto my-8'>
      {message}
    </div>
  )
}
