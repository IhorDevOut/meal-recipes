import { useRecipes } from '../hooks/useRecipes'

export function RecipesPage () {
  const { data, isLoading, error } = useRecipes()

  // if (error) {
  //     return <div className="container py-8">Error: {error.message}</div>
  // }

  // if (isLoading) {
  //     return <div className="container py-8">Loading...</div>
  // }

  return (
    <div className='container py-8'>
      <h1 className='text-3xl font-bold mb-8'>Recipes</h1>
    </div>
  )
}
