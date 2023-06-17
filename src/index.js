import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import App from './App'
import { FrontPage } from './pages/FrontPage'
import { RecipesPage } from './pages/RecipesPage'
import { BaseLayout } from './components/layout/BaseLayout'
import { NotFoundPage } from './pages/NotFoundPage'
import { SingleRecipe } from './pages/SingleRecipe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <FrontPage />
      },
      {
        path: '/recipes',
        element: <RecipesPage />
      },
      {
        path: '/recipes/:id',
        element: <SingleRecipe />
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </React.StrictMode>
)
