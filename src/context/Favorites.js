import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()
const KEY = 'favorites'

export function FavoritesProvider ({ children }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem(KEY)) || []

    setFavorites(favoritesFromStorage)
  }, [])

  function addToFavorites (uri) {
    if (favorites.includes(uri)) {
      return
    }

    const newFavorites = [...favorites, uri]

    setFavorites(newFavorites)
    localStorage.setItem(KEY, JSON.stringify(newFavorites))
  }

  function removeFromFavorites (uri) {
    const newFavorites = favorites.filter(favorite => favorite !== uri)

    setFavorites(newFavorites)
    localStorage.setItem(KEY, JSON.stringify(newFavorites))
  }

  function isInFavorites (uri) {
    return favorites.includes(uri)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isInFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites () {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }

  return context
}
