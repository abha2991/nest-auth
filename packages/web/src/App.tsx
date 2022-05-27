import {EditAttributes} from '@mui/icons-material'
import { FC, lazy, Suspense } from 'react'
import React, { useState } from "react";
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'
import AuthenticationCheck from './routes/AuthenticationCheck'
import Loading from './components/Loading'
import useAxiosInterceptors from './hooks/useAxiosInterceptor'

// const Login = lazy(() => import('./routes/Login'))
// const Register = lazy(() => import('./routes/Register'))
const Card = lazy(() => import('./routes/Card'))
const CardDetails = lazy(() => import('./routes/CardDetails'))
const Shell = lazy(() => import('./routes/Shell'))
const Dashboard = lazy(() => import('./routes/Dashboard'))
const FileRobotImageEditor = lazy(() => import('./routes/FileRobotImageEditor'))
const NotFound = lazy(() => import('./routes/NotFound'))
const EditCard= lazy(() => import('./routes/EditCard'))
const Home=lazy(()=>import('./routes/Home'))
const Registration=lazy(()=>import('./routes/Registration'))
const Header=lazy(()=>import('./routes/Header'))
const UserLogin=lazy(()=>import('./routes/UserLogin'))
const Preview=lazy(()=>import('./routes/Preview'))
const MuiHeader=lazy(()=>import('./routes/MuiHeader'))
const MuiHome=lazy(()=>import('./routes/MuiHome'))
// Other routes
const Users = lazy(() => import('./routes/Users'))
const TryCard = lazy(() => import('./routes/TryCard'))
const Profile = lazy(() => import('./routes/Profile'))
const Progress = lazy(() => import('./routes/ProgressBar'))


const DownloadCards=lazy(() => import('./routes/DownloadCards'))
const Drafts=lazy(() => import('./routes/Drafts'))
const Purchased=lazy(() => import('./routes/Purchased'))
const Card1=lazy(() => import('./routes/Cards/Card1'))
const Card2=lazy(() => import('./routes/Cards/Card2.js'))
const Card4=lazy(() => import('./routes/Cards/Card4'))
// import Purchased from './routes/Purchased'
// import Drafts from './routes/DownloadCards'




const App: FC = () => {
  const axiosReady = useAxiosInterceptors()

  if (!axiosReady) {
    return <Loading />
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>

            <Route index element={<Home/>} />
        <Route
          element={
            <AuthRoute>
              <Shell />


            </AuthRoute>
          }
        >

            {/*<Route index element={<EditCard />} />*/}
            {/* <Route path="edit-card" element={<EditCard />} />*/}
            {/* <Route path="preview" element={<Preview />} />*/}
          {/*<Route index element={<Dashboard />} />*/}
          {/*<Route path="users" element={<Users />} />*/}
          {/*<Route path="profile" element={<Profile />} />*/}

          <Route path="*" element={<NotFound />} />
        </Route>


        {/*  <Route*/}
        {/*      element={*/}
        {/*          <AuthenticationCheck>*/}
        {/*      <Shell />*/}


        {/*    </AuthenticationCheck>*/}
        {/*      }*/}
        {/*  >*/}

        {/*    <Route path="edit-card" element={<EditCard />} />*/}
        {/*       <Route path="preview" element={<Preview />} />*/}
        {/*      /!*<Route index element={<Dashboard />} />*!/*/}
        {/*      /!*<Route path="users" element={<Users />} />*!/*/}
        {/*      /!*<Route path="profile" element={<Profile />} />*!/*/}

        {/*      <Route path="*" element={<NotFound />} />*/}
        {/*</Route>*/}

<Route path="TryCard" element={<TryCard/>} />
<Route path="FileRobotImageEditor" element={<FileRobotImageEditor/>} />
            <Route path="edit-card" element={<EditCard />} />
            <Route path="muiheader" element={<MuiHeader />} />
 <Route path="download" element={<DownloadCards />} />
           <Route path="muihome" element={<MuiHome />} />
      <Route path="preview" element={<Preview/>} />
        <Route path="login" element={<UserLogin />} />
           <Route path="header" element={<Header />} />
<Route path="registration" element={<Registration/>}/>
           <Route path="home" element={<Home/>} />
         <Route path="card" element={<Card />} />
           <Route path="drafts" element={<Drafts />} />
            <Route path="card1" element={<Card1/>} />
  <Route path="card2" element={<Card2/>} />
           <Route path="card4" element={<Card4/>} />
           <Route path="purchased" element={<Purchased />} />
 <Route path="progress" element={<Progress />} />

      </Routes>
    </Suspense>
  )
}

export default App
