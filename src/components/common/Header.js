import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '../icons/Logo'

export function Header () {
  return (
    <header className='bg-slate-100 py-6'>
      <div className='container flex items-center justify-between'>
        <Link to='/'>
          <Logo width={150} height={50} />
          <h1 className='hidden'>Logo App</h1>
        </Link>

        <nav className='hidden sm:flex items-center gap-5 text-lg'>
          <NavLink
            to='/recipes' className={({ isActive }) => {
              return clsx(
                'header-link',
                isActive && 'text-emerald-500'
              )
            }}
          >Recipes
          </NavLink>
          <Link to='/favorites' className='header-link'>Favorites</Link>
        </nav>
      </div>
    </header>
  )
}
