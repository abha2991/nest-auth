import { FC, lazy, Suspense } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'
import Loading from './components/Loading'
import useAxiosInterceptors from './hooks/useAxiosInterceptor'

const Login = lazy(() => import('./routes/Login'))
const Register = lazy(() => import('./routes/Register'))

const Shell = lazy(() => import('./routes/Shell'))
const Dashboard = lazy(() => import('./routes/Dashboard'))
const NotFound = lazy(() => import('./routes/NotFound'))

// Other routes
const Users = lazy(() => import('./routes/Users'))
const Profile = lazy(() => import('./routes/Profile'))

const App: FC = () => {
  const axiosReady = useAxiosInterceptors()

  if (!axiosReady) {
    return <Loading />
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          element={
            <AuthRoute>
              <Shell />
            </AuthRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Suspense>
  )
}

export default App
