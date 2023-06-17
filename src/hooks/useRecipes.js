import { useState, useEffect } from 'react'

export function useRecipes ({ id = null }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const appUrl = process.env.REACT_APP_API_URL
  const appKey = process.env.REACT_APP_API_KEY
  const appId = process.env.REACT_APP_API_ID

  useEffect(() => {
    async function getData () {
      try {
        const url = id
          ? `${appUrl}/${id}?type=public&app_id=${appId}&app_key=${appKey}`
          : `${appUrl}/?type=public&app_id=${appId}&app_key=${appKey}&mealType=Breakfast`

        const response = await fetch(url)

        if (!response.ok) throw new Error('Something went wrong')

        const data = await response.json()

        if (!data) throw new Error('No data found')

        setData(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  return { isLoading, data, error }
}
