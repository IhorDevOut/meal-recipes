import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header className='bg-blue-900 text-slate-100 py-6 mb-4'>
      <div className='container flex items-center justify-between'>
        <Link to='/'>
          <h1 className='text-xl font-bold'>Logo App</h1>
        </Link>

        <nav className='flex items-center gap-5'>
          <Link to='/recipes' className='header-link'>Recipes</Link>
          <Link to='/favorites' className='header-link'>Favorites</Link>
        </nav>
      </div>
    </header>
  )
}
