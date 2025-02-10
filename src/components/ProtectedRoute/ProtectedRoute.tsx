import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@clerk/clerk-react"

const ProtectedRoute = () => {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
