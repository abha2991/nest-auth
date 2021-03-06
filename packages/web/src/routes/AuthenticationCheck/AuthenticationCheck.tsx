import { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useProfileApi from '../../api/useProfileApi'
import Loading from '../../components/Loading'

export type AuthRouteProps = {
  redirectTo?: string
}

const AuthenticationCheck: FC<AuthRouteProps> = ({ children, redirectTo = '/login' }) => {
  const { data: profile, status } = useProfileApi()

  const location = useLocation()

  console.log({location})
  if (status === 'loading') {
    return <Loading />
  }


  return profile && status === 'success' ? <>{children}</> : <Navigate to={redirectTo} state={{ from: location }} />
}

export default AuthenticationCheck
