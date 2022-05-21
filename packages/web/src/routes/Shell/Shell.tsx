import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import useProfileApi from '../../api/useProfileApi'
import Loading from '../../components/Loading'
import Header from './Header'
import Sidebar from './Sidebar'

const Shell: FC = () => {
  const { isLoading, isLoadingError } = useProfileApi()

  if (isLoading || isLoadingError) {
    return <Loading />
  }

  return (
    <>
      <Header />
      {/*<Sidebar>*/}
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      {/*</Sidebar>*/}
    </>
  )
}

export default Shell
