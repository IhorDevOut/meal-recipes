import { Link } from 'react-router-dom'

export function RecipeCard ({ recipe }) {
  return (
    <div className='mb-8 bg-slate-300 p-4 rounded-md flex flex-col'>
      <img src={recipe.image} alt={recipe.label} className='rounded mb-2 aspect-square' />
      <h2 className='text-xl font-bold mb-2'>{recipe.label}</h2>

      <ul className='text-sm mb-4'>
        {recipe.ingredientLines.map(line => (
          <li key={line} className='mb-1'>{line}</li>
        ))}
      </ul>

      <Link to={`/recipes/${recipe.id}`} className='text-blue-500 hover:underline mt-auto self-start'>View Recipe</Link>
    </div>
  )
}
