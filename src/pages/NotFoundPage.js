import { Link } from 'react-router-dom'

export function NotFoundPage () {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 relative z-10'>
      <img
        src='https://picsum.photos/id/165/1680/700'
        alt='404 Not Found'
        className='mb-8 absolute inset-0 -z-10 bg-cover object-cover w-full h-full pointer-events-none'
      />
      <h1 className='text-4xl font-bold mb-4'>404 Not Found</h1>
      <p className='text-lg text-gray-700 mb-8'>
        Oops! The page you're looking for does not exist.
      </p>
      <Link href='/' className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-600'>
        Go Back to Home
      </Link>
    </div>
  )
}
