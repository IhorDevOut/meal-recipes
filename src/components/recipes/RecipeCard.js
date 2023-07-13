import { Link } from 'react-router-dom'
import { FavoriteIcon } from '../icons/Favorite'
import { useFavorites } from '../../context/Favorites'

export function RecipeCard ({ recipe }) {
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites()

  function onClickHandler () {
    if (isInFavorites(recipe.uri)) {
      removeFromFavorites(recipe.uri)
    } else {
      addToFavorites(recipe.uri)
    }
  }

  return (
    <div className='mb-8 bg-slate-300 p-4 rounded-md flex flex-col relative'>
      <img src={recipe.image} alt={recipe.label} className='rounded mb-2 aspect-square' />
      <h2 className='text-xl font-bold mb-2'>{recipe.label}</h2>

      <ul className='text-sm mb-4'>
        {recipe.ingredientLines.map(line => (
          <li key={line} className='mb-1'>{line}</li>
        ))}
      </ul>

      <button type='button' className='absolute top-6 right-6' onClick={onClickHandler}>
        <FavoriteIcon size={8} isActive={isInFavorites(recipe.uri)} />
      </button>

      <Link to={`/recipes/${recipe.id}`} className='text-blue-500 hover:underline mt-auto self-start'>View Recipe</Link>
    </div>
  )
}
