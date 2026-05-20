import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getRouter } from './router'
import { RouterProvider } from '@tanstack/react-router'
import './styles.css'

// Recover the real URL from the 404 redirect
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  // Replace the current URL with the real one so TanStack Router sees it
  window.history.replaceState(null, '', redirect)
}

const router = getRouter()

// Now initialize the router with the correct URL
router.load()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)