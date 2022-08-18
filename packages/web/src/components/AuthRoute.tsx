import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useProfileApi from '../api/useProfileApi'
import Loading from './Loading'

export type AuthRouteProps = {
  redirectTo?: string
}

const AuthRoute: FC<AuthRouteProps> = ({ children, redirectTo = '/login' }) => {
  const { data: profile, status } = useProfileApi()

  const location = useLocation()

  if (status === 'loading') {
    return <Loading />
  }

  return profile && status === 'success' ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} />
}

export default AuthRoute
