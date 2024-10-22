import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const user = localStorage.getItem('logado')
  return user != null ? <>{children}</> : <Navigate to="/login" />
}
