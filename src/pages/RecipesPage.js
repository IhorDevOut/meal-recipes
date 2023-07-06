import { Loader } from '../components/UI/Loader'
import { ErrorMessage } from '../components/UI/ErrorMessage'
import { ListRecipes } from '../components/recipes/ListRecipes'
import { useRecipes } from '../hooks/useRecipes'
import { useEffect, useState } from 'react'
import { SearchBar } from '../components/recipes/SearchBar'

export function RecipesPage () {
  const [query, setQuery] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const { isLoading, data, error } = useRecipes(query)
  const [nextLink, setNextLink] = useState(null)
  const [recipes, setRecipes] = useState([])

  function prepareRecipes (recipe) {
    const hashPattern = /recipe_(.*)/
    const match = recipe.uri.match(hashPattern)

    return {
      id: match[1],
      ...recipe
    }
  }

  function startSearch () {
    if (!searchTerm || searchTerm.length < 3) return

    setQuery({ term: searchTerm })
  }

  useEffect(() => {
    if (data) {
      const initRecipes = data.hits.map(({ recipe }) => prepareRecipes(recipe))

      setRecipes(initRecipes)
      setNextLink(data?._links?.next?.href)
    }
  }, [data])

  function loadMoreClickHandler (evt) {
    evt.preventDefault()

    if (nextLink) {
      fetch(nextLink)
        .then(response => response.json())
        .then(nextData => {
          const nextRecipes = nextData.hits.map(({ recipe }) => prepareRecipes(recipe))

          setNextLink(nextData?._links?.next?.href)

          setRecipes(prevRecipes => {
            return [
              ...prevRecipes,
              ...nextRecipes
            ]
          })
        })
    }
  }

  return (
    <>
      <div className='container py-8'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl font-bold'>All Recipes</h1>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} startSearch={startSearch} />
        </div>

        {
        isLoading
          ? <Loader />
          : error
            ? <ErrorMessage message={error} />
            : <ListRecipes recipes={recipes} />
        }

        <div className='flex justify-center'>
          <button
            type='button'
            className='bg-slate-600 px-8 py-4 text-center font-semibold text-slate-50'
            onClick={loadMoreClickHandler}
          >
            Load More
          </button>
        </div>
      </div>

      <div className='bg-yellow-200 text-slate-950 py-8 text-center'>
        <div className='container'>
          <p className='text-2xl mb-4'>
            Check out our special offers and discounts on premium ingredients!
          </p>
          <p className='text-lg mb-4'>
            Use promo code <span className='font-bold'>DELICIOUS25</span> to get 25% off
            your first purchase.
          </p>
        </div>
      </div>
    </>
  )
}
