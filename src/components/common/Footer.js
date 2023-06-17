import { Link } from 'react-router-dom'

export function Footer () {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Explore</h3>
            <ul className='text-base'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/recipes'>Recipes</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Resources</h3>
            <ul className='text-base'>
              <li><Link to='/cooking-tips'>Cooking Tips</Link></li>
              <li><Link to='/meal-plans'>Meal Plans</Link></li>
              <li><Link to='/ingredients'>Ingredients</Link></li>
              <li><Link to='/kitchen-tools'>Kitchen Tools</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='text-base'>
              <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
              <li><Link to='/terms-of-service'>Terms of Service</Link></li>
              <li><Link to='/disclaimer'>Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-600 mt-8 pt-4 text-sm text-gray-500'>
          <p>&copy; {year} Cooking Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
