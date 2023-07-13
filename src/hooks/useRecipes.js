import { useState, useEffect, useMemo } from 'react'

export function useRecipes (
  { url = null, id = null, type = 'Breakfast', term = '', uri = [] } = {},
  load = true
) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const appUrl = process.env.REACT_APP_API_URL
  const appKey = process.env.REACT_APP_API_KEY
  const appId = process.env.REACT_APP_API_ID

  const buildUrl = useMemo(() => {
    if (url) return url

    const baseUrl = new URL(appUrl)

    baseUrl.searchParams.set('type', 'public')
    baseUrl.searchParams.set('app_id', appId)
    baseUrl.searchParams.set('app_key', appKey)

    if (id) {
      baseUrl.pathname = baseUrl.pathname + `/${id}`
    } else if (uri.length > 0) {
      baseUrl.pathname = baseUrl.pathname + '/by-uri'

      uri.forEach(u => {
        baseUrl.searchParams.append('uri', u)
      })
    } else {
      if (term) baseUrl.searchParams.set('q', term)
      if (type) baseUrl.searchParams.set('mealType', type)
    }

    return baseUrl.href
  }, [appUrl, appId, appKey, id, type, term, uri, url])

  useEffect(() => {
    if (!load) return

    async function getData () {
      try {
        const response = await fetch(buildUrl)

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
  }, [buildUrl, load])

  return { isLoading, data, error }
}
