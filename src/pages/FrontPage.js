export function FrontPage () {
  return (
    <div className='bg-white'>
      <section className='hero-section py-20 relative z-10'>
        <img src='https://picsum.photos/id/165/1680/700' className='absolute inset-0 -z-10 bg-cover object-cover w-full h-full pointer-events-none' />

        <div className='container mx-auto text-center drop-shadow-lg'>
          <h1 className='text-4xl font-bold text-white mb-8'>Cooking Recipes</h1>
          <h2 className='text-2xl font-bold text-white mb-4'>Welcome to our Cooking Recipes Website</h2>
          <p className='text-lg text-white'>
            Discover a wide variety of delicious recipes for every occasion. From breakfast to dinner, appetizers to desserts,
            we've got you covered. Our collection features recipes from around the world, so you can explore different cuisines
            and flavors right in your kitchen. Get inspired and start cooking today!
          </p>
        </div>
      </section>

      <section className='container mx-auto py-8'>
        <h2 className='text-2xl font-bold mb-4'>Featured Recipes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Place your featured recipe cards or components here */}
        </div>
      </section>

      <section className='bg-pastel-color py-8'>
        <div className='container mx-auto'>
          <h2 className='text-2xl font-bold text-center mb-4'>Join Our Cooking Community</h2>
          <p className='text-lg text-center'>
            Connect with fellow food enthusiasts, share your favorite recipes, and get inspired by others. Our community is passionate
            about cooking and welcomes all skill levels. Whether you're a beginner or a seasoned chef, you'll find a supportive and
            friendly environment to exchange ideas and learn new culinary techniques.
          </p>
        </div>
      </section>
    </div>
  )
}
