import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useProfileApi from '../api/useProfileApi'
import Loading from './Loading'

export type AdminRouteProps = {
  redirectTo?: string
}

const AdminRoute: FC<AdminRouteProps> = ({ children, redirectTo = '/' }) => {
  const { data: profile, status } = useProfileApi()

  const location = useLocation()

  if (status === 'loading') {
    return <Loading />
  }

  return profile && profile.role === 'ADMIN' && status === 'success' ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} />
  )
}

export default AdminRoute
