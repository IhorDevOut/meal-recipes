import { RecipeCard } from './RecipeCard'

export function ListRecipes ({ recipes }) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {recipes && recipes.map((recipe, idx) => <RecipeCard key={recipe.id + idx} recipe={recipe} />)}
    </div>
  )
}
