import { useParams } from 'react-router-dom'
import { Loader } from '../components/UI/Loader'
import { ErrorMessage } from '../components/UI/ErrorMessage'
import { useRecipes } from '../hooks/useRecipes'

export function SingleRecipe () {
  const { id } = useParams()
  const { isLoading, data, error } = useRecipes({ id })

  const { recipe } = data || {}

  return (
    <div className='container py-8'>
      {
        isLoading
          ? <Loader />
          : error
            ? <ErrorMessage message={error} />
            : (
              <div className=''>

                <h1 className='text-2xl font-semibold mb-6'>{recipe.label}</h1>

                <div className='grid grid-cols-[300px_1fr] gap-8'>
                  <img src={recipe.image} alt={recipe.label} className='aspect-square' />

                  <div>
                    <h2 className='text-xl font-bold mb-2'>Ingredients</h2>
                    <ul className='mb-4'>
                      {recipe.ingredientLines.map(line => (
                        <li key={line} className='mb-1'>{line}</li>
                      ))}
                    </ul>

                    <h2 className='text-xl font-bold mb-2'>Cuisine</h2>
                    <ul className='mb-4'>
                      {recipe.cuisineType.map(cuisine => (
                        <li key={cuisine} className='mb-1'>{cuisine}</li>
                      ))}
                    </ul>

                    <h2 className='text-xl font-bold mb-2'>Diet</h2>
                    <ul className='mb-4'>
                      {recipe.dietLabels.map(diet => (
                        <li key={diet} className='mb-1'>{diet}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
              )
      }
    </div>
  )
}
