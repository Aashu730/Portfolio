import { Navigate, useLocation } from 'react-router-dom'
import { isAdminAuthenticated } from '../utils/adminAuth'

export default function AdminRoute({ children }) {
  const location = useLocation()

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin-login" replace state={{ from: location }} />
  }

  return <>{children}</>
}
