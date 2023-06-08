export function Footer () {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Explore</h3>
            <ul className='text-base'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Recipes</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Resources</h3>
            <ul className='text-base'>
              <li><a href='#'>Cooking Tips</a></li>
              <li><a href='#'>Meal Plans</a></li>
              <li><a href='#'>Ingredients</a></li>
              <li><a href='#'>Kitchen Tools</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='text-base'>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Terms of Service</a></li>
              <li><a href='#'>Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-600 mt-8 pt-4 text-sm text-gray-500'>
          <p>&copy; 2023 Cooking Recipes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
