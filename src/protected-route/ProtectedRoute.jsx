import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token')
  if (token) {
    return children
  } else {
    return <Navigate to="/Login" />
  }
}
