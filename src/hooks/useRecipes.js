import { API_URL, API_KEY } from '../utils/constants'
import { useState, useEffect } from 'react'

export function useRecipes () {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('useEffect')

    async function getData () {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  // const response = await fetch(`${API_URL}/complexSearch?apiKey=${API_KEY}`);
  // const data = await response.json()

  return { isLoading, data, error }
}
