import { createBrowserRouter } from 'react-router-dom'
import Form from './pages/form'
import Login from './pages/login'
import Home from './pages/Home'
import App from './App'

import { PrivateRoute } from './PrivateRoute'
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        )
      },
      {
        path: '/form',
        element: <Form />
      },
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
])

export default Router
