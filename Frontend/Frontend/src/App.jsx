import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <><Login /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
