import { Link } from 'react-router-dom'

export function NotFoundPage () {
  return (
    <div className='container py-8 flex items-center justify-center flex-col'>
      <h1 className='text-6xl text-center mb-8'>404</h1>
      <Link className='text-3xl text-center' to='/'>Go to Home</Link>
    </div>

  )
}
