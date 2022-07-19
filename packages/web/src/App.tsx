import { EditAttributes } from '@mui/icons-material'
import { FC, lazy, Suspense } from 'react'
import React, { useState } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import AdminRoute from './components/AdminRoute'
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
const EditCard = lazy(() => import('./routes/EditCard'))
const Home = lazy(() => import('./routes/Home'))
const Registration = lazy(() => import('./routes/Registration'))
const Header = lazy(() => import('./routes/Header'))
const UserLogin = lazy(() => import('./routes/UserLogin'))
const Preview = lazy(() => import('./routes/Preview'))
const MuiHeader = lazy(() => import('./routes/MuiHeader'))
const MuiHome = lazy(() => import('./routes/MuiHome'))
// Other routes
const Users = lazy(() => import('./routes/Users'))
const TryCard = lazy(() => import('./routes/TryCard'))
const Profile = lazy(() => import('./routes/Profile'))
const Progress = lazy(() => import('./routes/ProgressBar'))
const ScrollToTop = lazy(() => import('./routes/ScrollToTop'))
const Privacy = lazy(() => import('./routes/Privacy'))
const DownloadCards = lazy(() => import('./routes/DownloadCards'))
const Drafts = lazy(() => import('./routes/Drafts'))
const Purchased = lazy(() => import('./routes/Purchased'))
const Card1 = lazy(() => import('./routes/Cards/Card1'))
const Card2 = lazy(() => import('./routes/Cards/Card2'))
const Card4 = lazy(() => import('./routes/Cards/Card4'))

const EditCard1 = lazy(() => import('./routes/Cards/EditCard1'))
const EditCard2 = lazy(() => import('./routes/Cards/EditCard2'))
const DummyCard = lazy(() => import('./routes/Cards/DummyCard'))
const HashLinkPage = lazy(() => import('./routes/HashLink'))

const HomeAdmin = lazy(() => import('./routes/adminpanel/Home/Home'))

const RegisteredUsersList = lazy(() => import('./routes/adminpanel/Home/RegisteredUsersList'))
const WeddingCards = lazy(() => import('./routes/adminpanel/Home/WeddingCards'))
const UploadImage = lazy(() => import('./routes/adminpanel/Home/UploadImage'))
const AnniversaryCards = lazy(() => import('./routes/adminpanel/Home/AnniversaryCards'))
const BabyShowerCards = lazy(() => import('./routes/adminpanel/Home/BabyShowerCards'))
const BirthdayCards = lazy(() => import('./routes/adminpanel/Home/BirthdayCards'))
const CongratulationsCards = lazy(() => import('./routes/adminpanel/Home/CongratulationsCards'))
const GetWellSoonCards = lazy(() => import('./routes/adminpanel/Home/GetWellSoonCards'))
const MissYouCards = lazy(() => import('./routes/adminpanel/Home/MissYouCards'))
const ReceptionCards = lazy(() => import('./routes/adminpanel/Home/ReceptionCards'))
const ThankYouCards = lazy(() => import('./routes/adminpanel/Home/ThankYouCards'))

const EngagementCards = lazy(() => import('./routes/adminpanel/Home/EngagementCards'))

const AdminLogin = lazy(() => import('./routes/adminpanel/Home/AdminLogin'))
const UpdateCardDetails = lazy(() => import('./routes/adminpanel/Home/UpdateCardDetails'))

const UserInformation = lazy(() => import('./routes/adminpanel/Home/UserInformation'))
const AllDrafts = lazy(() => import('./routes/adminpanel/Home/AllDrafts'))
const AllPurchased = lazy(() => import('./routes/adminpanel/Home/AllPurchased'))
const EnterCardDetails = lazy(() => import('./routes/adminpanel/Home/EnterCardDetails'))

const EnterCaptionDetails = lazy(() => import('./routes/adminpanel/Home/EnterCaptionDetails'))
const UsersQuery = lazy(() => import('./routes/adminpanel/Home/UsersQuery'))
const CustomizeCardsquery = lazy(() => import('./routes/adminpanel/Home/CustomizeCardsquery'))

const BabyShowerCardsCategory = lazy(() => import('./routes/BabyShowerCards'))
const WeddingCardsCategory = lazy(() => import('./routes/WeddingCards'))
const AnniversaryCardsCategory = lazy(() => import('./routes/AnniversaryCards'))
const BirthdayCardsCategory = lazy(() => import('./routes/BirthdayCards'))
const CongratulationsCardsCategory = lazy(() => import('./routes/CongratulationsCards'))
const EngagementCardsCategory = lazy(() => import('./routes/EngagementCards'))
const GetWellSoonCardsCategory = lazy(() => import('./routes/GetWellSoonCards'))
const MissYouCardsCategory = lazy(() => import('./routes/MissYouCards'))
const ReceptionCardsCategory = lazy(() => import('./routes/ReceptionCards'))
const ThankYouCardsCategory = lazy(() => import('./routes/ThankYouCards'))

// Congratulations Card

const Card6 = lazy(() => import('./routes/Cards/Congratulations/Card6'))
const Card7 = lazy(() => import('./routes/Cards/Congratulations/Card7'))
const Card8 = lazy(() => import('./routes/Cards/Congratulations/Card8'))
const Card9 = lazy(() => import('./routes/Cards/Congratulations/Card9'))
const EditCard6 = lazy(() => import('./routes/Cards/Congratulations/EditCard6'))
const EditCard7 = lazy(() => import('./routes/Cards/Congratulations/EditCard7'))
const EditCard8 = lazy(() => import('./routes/Cards/Congratulations/EditCard8'))
const EditCard9 = lazy(() => import('./routes/Cards/Congratulations/EditCard9'))

// Anniversary Card

const Card12 = lazy(() => import('./routes/Cards/Anniversary/Card12'))
const EditCard12 = lazy(() => import('./routes/Cards/Anniversary/EditCard12'))
const Card13 = lazy(() => import('./routes/Cards/Anniversary/Card13'))
const EditCard13 = lazy(() => import('./routes/Cards/Anniversary/EditCard13'))
const Card14 = lazy(() => import('./routes/Cards/Anniversary/Card14'))
const EditCard14 = lazy(() => import('./routes/Cards/Anniversary/EditCard14'))
const Card15 = lazy(() => import('./routes/Cards/Anniversary/Card15'))

const Card16 = lazy(() => import('./routes/Cards/Anniversary/Card16'))
const EditCard16 = lazy(() => import('./routes/Cards/Anniversary/EditCard16'))

//ThankYou Card
const Card18 = lazy(() => import('./routes/Cards/ThankYou/Card18'))
const EditCard18 = lazy(() => import('./routes/Cards/ThankYou/EditCard18'))
const Card19 = lazy(() => import('./routes/Cards/ThankYou/Card19'))
const EditCard19 = lazy(() => import('./routes/Cards/ThankYou/EditCard19'))
const Card20 = lazy(() => import('./routes/Cards/ThankYou/Card20'))
const EditCard20 = lazy(() => import('./routes/Cards/ThankYou/EditCard20'))
const Card21 = lazy(() => import('./routes/Cards/ThankYou/Card21'))
const EditCard21 = lazy(() => import('./routes/Cards/ThankYou/EditCard21'))
const Card22 = lazy(() => import('./routes/Cards/ThankYou/Card22'))
const EditCard22 = lazy(() => import('./routes/Cards/ThankYou/EditCard22'))

//Miss You Card
const Card23 = lazy(() => import('./routes/Cards/MissYou/Card23'))
const EditCard23 = lazy(() => import('./routes/Cards/MissYou/EditCard23'))
const Card24 = lazy(() => import('./routes/Cards/MissYou/Card24'))
const EditCard24 = lazy(() => import('./routes/Cards/MissYou/EditCard24'))
const Card25 = lazy(() => import('./routes/Cards/MissYou/Card25'))
const EditCard25 = lazy(() => import('./routes/Cards/MissYou/EditCard25'))
const Card26 = lazy(() => import('./routes/Cards/MissYou/Card26'))
const EditCard26 = lazy(() => import('./routes/Cards/MissYou/EditCard26'))

//Get Well Soon cards
const Card27 = lazy(() => import('./routes/Cards/GetWellSoon/Card27'))
const EditCard27 = lazy(() => import('./routes/Cards/GetWellSoon/EditCard27'))
const Card28 = lazy(() => import('./routes/Cards/GetWellSoon/Card28'))
const EditCard28 = lazy(() => import('./routes/Cards/GetWellSoon/EditCard28'))
const Card30 = lazy(() => import('./routes/Cards/GetWellSoon/Card30'))
const EditCard30 = lazy(() => import('./routes/Cards/GetWellSoon/EditCard30'))
const Card31 = lazy(() => import('./routes/Cards/GetWellSoon/Card31'))
const EditCard31 = lazy(() => import('./routes/Cards/GetWellSoon/EditCard31'))

// Baby Shower Cards
const Card32 = lazy(() => import('./routes/Cards/BabyShower/Card32'))
const EditCard32 = lazy(() => import('./routes/Cards/BabyShower/EditCard32'))
const Card33 = lazy(() => import('./routes/Cards/BabyShower/Card33'))
const EditCard33 = lazy(() => import('./routes/Cards/BabyShower/EditCard33'))
const Card34 = lazy(() => import('./routes/Cards/BabyShower/Card34'))
const EditCard34 = lazy(() => import('./routes/Cards/BabyShower/EditCard34'))
const Card35 = lazy(() => import('./routes/Cards/BabyShower/Card35'))
const EditCard35 = lazy(() => import('./routes/Cards/BabyShower/EditCard35'))

// Reception
const Card40 = lazy(() => import('./routes/Cards/Reception/Card40'))
const EditCard40 = lazy(() => import('./routes/Cards/Reception/EditCard40'))
const Card41 = lazy(() => import('./routes/Cards/Reception/Card41'))
const EditCard41 = lazy(() => import('./routes/Cards/Reception/EditCard41'))
const Card42 = lazy(() => import('./routes/Cards/Reception/Card42'))
const EditCard42 = lazy(() => import('./routes/Cards/Reception/EditCard42'))
const Card43 = lazy(() => import('./routes/Cards/Reception/Card43'))
const EditCard43 = lazy(() => import('./routes/Cards/Reception/EditCard43'))

// Birthday
const Card44 = lazy(() => import('./routes/Cards/Birthday/Card44'))
const EditCard44 = lazy(() => import('./routes/Cards/Birthday/EditCard44'))
const Card45 = lazy(() => import('./routes/Cards/Birthday/Card45'))
const EditCard45 = lazy(() => import('./routes/Cards/Birthday/EditCard45'))
const Card46 = lazy(() => import('./routes/Cards/Birthday/Card46'))
const EditCard46 = lazy(() => import('./routes/Cards/Birthday/EditCard46'))
const Card47 = lazy(() => import('./routes/Cards/Birthday/Card47'))
const EditCard47 = lazy(() => import('./routes/Cards/Birthday/EditCard47'))

// Engagement
const Card50 = lazy(() => import('./routes/Cards/Engagement/Card50'))
const EditCard50 = lazy(() => import('./routes/Cards/Engagement/EditCard50'))
const Card51 = lazy(() => import('./routes/Cards/Engagement/Card51'))
const EditCard51 = lazy(() => import('./routes/Cards/Engagement/EditCard51'))
const Card52 = lazy(() => import('./routes/Cards/Engagement/Card52'))
const EditCard52 = lazy(() => import('./routes/Cards/Engagement/EditCard52'))
const Card53 = lazy(() => import('./routes/Cards/Engagement/Card53'))
const EditCard53 = lazy(() => import('./routes/Cards/Engagement/EditCard53'))

// Wedding
const Card56 = lazy(() => import('./routes/Cards/Wedding/Card56'))
const Card57 = lazy(() => import('./routes/Cards/Wedding/Card57'))
const Card59 = lazy(() => import('./routes/Cards/Wedding/Card59'))
const Card60 = lazy(() => import('./routes/Cards/Wedding/Card60'))
const Card62 = lazy(() => import('./routes/Cards/Wedding/Card62'))
const Card63 = lazy(() => import('./routes/Cards/Wedding/Card63'))
const Card64 = lazy(() => import('./routes/Cards/Wedding/Card64'))
const Card65 = lazy(() => import('./routes/Cards/Wedding/Card65'))
const Card66 = lazy(() => import('./routes/Cards/Wedding/Card66'))
const Card67 = lazy(() => import('./routes/Cards/Wedding/Card67'))
const Card69 = lazy(() => import('./routes/Cards/Wedding/Card69'))
const Card70 = lazy(() => import('./routes/Cards/Wedding/Card70'))
const Card71 = lazy(() => import('./routes/Cards/Wedding/Card71'))
const Card72 = lazy(() => import('./routes/Cards/Wedding/Card72'))
const Card73 = lazy(() => import('./routes/Cards/Wedding/Card73'))
const Card74 = lazy(() => import('./routes/Cards/Wedding/Card74'))
const Card75 = lazy(() => import('./routes/Cards/Wedding/Card75'))
const Card77 = lazy(() => import('./routes/Cards/Wedding/Card77'))
const Card78 = lazy(() => import('./routes/Cards/Wedding/Card78'))
const Card79 = lazy(() => import('./routes/Cards/Wedding/Card79'))
const Card80 = lazy(() => import('./routes/Cards/Wedding/Card80'))
const EditCard56 = lazy(() => import('./routes/Cards/Wedding/EditCard56'))
const EditCard57 = lazy(() => import('./routes/Cards/Wedding/EditCard57'))
const EditCard59 = lazy(() => import('./routes/Cards/Wedding/EditCard59'))
const EditCard60 = lazy(() => import('./routes/Cards/Wedding/EditCard60'))
const EditCard62 = lazy(() => import('./routes/Cards/Wedding/EditCard62'))
const EditCard63 = lazy(() => import('./routes/Cards/Wedding/EditCard63'))
const EditCard64 = lazy(() => import('./routes/Cards/Wedding/EditCard64'))
const EditCard65 = lazy(() => import('./routes/Cards/Wedding/EditCard65'))
const EditCard67 = lazy(() => import('./routes/Cards/Wedding/EditCard67'))
const EditCard66 = lazy(() => import('./routes/Cards/Wedding/EditCard66'))
const EditCard69 = lazy(() => import('./routes/Cards/Wedding/EditCard69'))
const EditCard70 = lazy(() => import('./routes/Cards/Wedding/EditCard70'))
const EditCard71 = lazy(() => import('./routes/Cards/Wedding/EditCard71'))
const EditCard72 = lazy(() => import('./routes/Cards/Wedding/EditCard72'))
const EditCard73 = lazy(() => import('./routes/Cards/Wedding/EditCard73'))
const EditCard74 = lazy(() => import('./routes/Cards/Wedding/EditCard74'))
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
        {/*<Route*/}
        {/*  element={*/}
        {/*    <AuthRoute>*/}
        {/*      <Shell />*/}
        {/*    </AuthRoute>*/}
        {/*  }*/}
        {/*>*/}
        {/*  /!*<Route index element={<EditCard />} />*!/*/}
        {/*  /!* <Route path="edit-card" element={<EditCard />} />*!/*/}
        {/*  /!* <Route path="preview" element={<Preview />} />*!/*/}
        {/*  /!*<Route index element={<Dashboard />} />*!/*/}
        {/*  /!*<Route path="users" element={<Users />} />*!/*/}
        {/*  /!*<Route path="profile" element={<Profile />} />*!/*/}

        {/*  <Route path="*" element={<NotFound />} />*/}
        {/*</Route>*/}

        <Route index element={<Home />} />

        <Route element={<AuthRoute />}>
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/purchased" element={<Purchased />} />
          <Route path="/purchased" element={<Purchased />} />
          <Route path="/edit-card1" element={<EditCard1 />} />
          <Route path="/edit-card2" element={<EditCard2 />} />
        </Route>

        {/*Admin Panel*/}
        <Route element={<AdminRoute />}>
          <Route path="home-admin" element={<HomeAdmin />} />
          <Route path="registered-users" element={<RegisteredUsersList />} />
          <Route path="wedding-cards" element={<WeddingCards />} />
          <Route path="upload" element={<UploadImage />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="engagement-cards" element={<EngagementCards />} />
          <Route path="update-card-details" element={<UpdateCardDetails />} />

          <Route path="user-information" element={<UserInformation />} />

          <Route path="anniversary-cards" element={<AnniversaryCards />} />
          <Route path="baby-shower-cards" element={<BabyShowerCards />} />
          <Route path="birthday-cards" element={<BirthdayCards />} />
          <Route path="congratulations-cards" element={<CongratulationsCards />} />
          <Route path="get-well-soon-cards" element={<GetWellSoonCards />} />
          <Route path="miss-you-cards" element={<MissYouCards />} />
          <Route path="reception-cards" element={<ReceptionCards />} />
          <Route path="thank-you-cards" element={<ThankYouCards />} />
          <Route path="all-drafts" element={<AllDrafts />} />
          <Route path="all-purchased" element={<AllPurchased />} />
          <Route path="enter-card-details" element={<EnterCardDetails />} />
          <Route path="enter-caption-details" element={<EnterCaptionDetails />} />
          <Route path="customize-cards-query" element={<CustomizeCardsquery />} />
        </Route>

        <Route element={<Header />}>
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

        <Route path="TryCard" element={<TryCard />} />
        <Route path="scroll" element={<ScrollToTop />} />
        <Route path="hash" element={<HashLinkPage />} />
        <Route path="FileRobotImageEditor" element={<FileRobotImageEditor />} />
        <Route path="edit-card" element={<EditCard />} />
        <Route path="dummycard" element={<DummyCard />} />
        <Route path="muiheader" element={<MuiHeader />} />
        <Route path="download" element={<DownloadCards />} />
        <Route path="muihome" element={<MuiHome />} />
        <Route path="preview" element={<Preview />} />
        <Route path="login" element={<UserLogin />} />

        <Route path="header" element={<Header />} />
        <Route path="registration" element={<Registration />} />
        <Route path="home" element={<Home />} />
        <Route path="card" element={<Card />} />
        {/*<Route path="drafts" element={<Drafts />} />*/}
        <Route path="card1" element={<Card1 />} />
        <Route path="card2" element={<Card2 />} />
        <Route path="card4" element={<Card4 />} />

        {/*<Route path="purchased" element={<Purchased />} />*/}
        <Route path="progress" element={<Progress />} />
        <Route path="users-query" element={<UsersQuery />} />

        <Route path="header" element={<Header />} />
        <Route path="registration" element={<Registration />} />
        <Route path="home" element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="card" element={<Card />} />
        <Route path="cardetails" element={<CardDetails />} />
        <Route path="progress" element={<Progress />} />
        <Route path="babyshowercards" element={<BabyShowerCardsCategory />} />
        <Route path="weddingcards" element={<WeddingCardsCategory />} />
        <Route path="anniversarycards" element={<AnniversaryCardsCategory />} />
        <Route path="birthdaycards" element={<BirthdayCardsCategory />} />
        <Route path="congratulationscards" element={<CongratulationsCardsCategory />} />
        <Route path="engagementcards" element={<EngagementCardsCategory />} />
        <Route path="getwellsooncards" element={<GetWellSoonCardsCategory />} />
        <Route path="missyoucards" element={<MissYouCardsCategory />} />
        <Route path="receptioncards" element={<ReceptionCardsCategory />} />
        <Route path="thankyoucards" element={<ThankYouCardsCategory />} />

        {/*Congratulations Card*/}
        <Route path="card6" element={<Card6 />} />
        <Route path="card7" element={<Card7 />} />
        <Route path="card8" element={<Card8 />} />
        <Route path="card9" element={<Card9 />} />
        <Route path="/edit-card6" element={<EditCard6 />} />
        <Route path="/edit-card7" element={<EditCard7 />} />
        <Route path="/edit-card8" element={<EditCard8 />} />
        <Route path="/edit-card9" element={<EditCard9 />} />

        {/*Anniversary Card*/}
        <Route path="card12" element={<Card12 />} />
        <Route path="edit-card12" element={<EditCard12 />} />
        <Route path="card13" element={<Card13 />} />
        <Route path="edit-card13" element={<EditCard13 />} />
        <Route path="card14" element={<Card14 />} />
        <Route path="edit-card14" element={<EditCard14 />} />
        <Route path="card15" element={<Card15 />} />
        <Route path="card16" element={<Card16 />} />
        <Route path="edit-card16" element={<EditCard16 />} />

        {/*Thank You Card*/}
        <Route path="card18" element={<Card18 />} />
        <Route path="edit-card18" element={<EditCard18 />} />
        <Route path="card19" element={<Card19 />} />
        <Route path="edit-card19" element={<EditCard19 />} />
        <Route path="card20" element={<Card20 />} />
        <Route path="edit-card20" element={<EditCard20 />} />
        <Route path="card21" element={<Card21 />} />
        <Route path="edit-card21" element={<EditCard21 />} />
        <Route path="card22" element={<Card22 />} />
        <Route path="edit-card22" element={<EditCard22 />} />

        {/*Miss You Cards*/}

        <Route path="card23" element={<Card23 />} />
        <Route path="edit-card23" element={<EditCard23 />} />
        <Route path="card24" element={<Card24 />} />
        <Route path="edit-card24" element={<EditCard24 />} />
        <Route path="card25" element={<Card25 />} />
        <Route path="edit-card25" element={<EditCard25 />} />
        <Route path="card26" element={<Card26 />} />
        <Route path="edit-card26" element={<EditCard26 />} />

        {/*Get Well Soon Cards*/}

        <Route path="card27" element={<Card27 />} />
        <Route path="edit-card27" element={<EditCard27 />} />
        <Route path="card28" element={<Card28 />} />
        <Route path="edit-card28" element={<EditCard28 />} />
        <Route path="card30" element={<Card30 />} />
        <Route path="edit-card30" element={<EditCard30 />} />
        <Route path="card31" element={<Card31 />} />
        <Route path="edit-card31" element={<EditCard31 />} />

        {/*Baby Shower Cards*/}
        <Route path="card32" element={<Card32 />} />
        <Route path="edit-card32" element={<EditCard32 />} />
        <Route path="card33" element={<Card33 />} />
        <Route path="edit-card33" element={<EditCard33 />} />
        <Route path="card34" element={<Card34 />} />
        <Route path="edit-card34" element={<EditCard34 />} />
        <Route path="card35" element={<Card35 />} />
        <Route path="edit-card35" element={<EditCard35 />} />

        {/*Reception*/}

        <Route path="card40" element={<Card40 />} />

        <Route path="edit-card40" element={<EditCard40 />} />
        <Route path="card41" element={<Card41 />} />
        <Route path="edit-card41" element={<EditCard41 />} />
        <Route path="card42" element={<Card42 />} />
        <Route path="edit-card42" element={<EditCard42 />} />
        <Route path="card43" element={<Card43 />} />
        <Route path="edit-card43" element={<EditCard43 />} />

        {/*Birthday*/}
        <Route path="card44" element={<Card44 />} />
        <Route path="edit-card44" element={<EditCard44 />} />
        <Route path="card45" element={<Card45 />} />
        <Route path="edit-card45" element={<EditCard45 />} />
        <Route path="card46" element={<Card46 />} />
        <Route path="edit-card46" element={<EditCard46 />} />
        <Route path="card47" element={<Card47 />} />
        <Route path="edit-card47" element={<EditCard47 />} />

        {/*Engagement*/}
        <Route path="card50" element={<Card50 />} />
        <Route path="edit-card50" element={<EditCard50 />} />
        <Route path="card51" element={<Card51 />} />
        <Route path="edit-card51" element={<EditCard51 />} />
        <Route path="card52" element={<Card52 />} />
        <Route path="edit-card52" element={<EditCard52 />} />
        <Route path="card53" element={<Card53 />} />
        <Route path="edit-card53" element={<EditCard53 />} />

        {/*Wedding*/}
        <Route path="card56" element={<Card56 />} />
        <Route path="card57" element={<Card57 />} />
        <Route path="card59" element={<Card59 />} />
        <Route path="card60" element={<Card60 />} />
        <Route path="card62" element={<Card62 />} />
        <Route path="card63" element={<Card63 />} />
        <Route path="card64" element={<Card64 />} />
        <Route path="card65" element={<Card65 />} />
        <Route path="card66" element={<Card66 />} />
        <Route path="card67" element={<Card67 />} />
        <Route path="card69" element={<Card69 />} />
        <Route path="card70" element={<Card70 />} />
        <Route path="card71" element={<Card71 />} />
        <Route path="card72" element={<Card72 />} />
        <Route path="card73" element={<Card73 />} />
        <Route path="card74" element={<Card74 />} />
        <Route path="card75" element={<Card75 />} />
        <Route path="card77" element={<Card77 />} />
        <Route path="card78" element={<Card78 />} />
        <Route path="card79" element={<Card79 />} />
        <Route path="card80" element={<Card80 />} />
        <Route path="edit-card56" element={<EditCard56 />} />
        <Route path="edit-card57" element={<EditCard57 />} />
        <Route path="edit-card59" element={<EditCard59 />} />
        <Route path="edit-card60" element={<EditCard60 />} />
        <Route path="edit-card62" element={<EditCard62 />} />
        <Route path="edit-card63" element={<EditCard63 />} />
        <Route path="edit-card64" element={<EditCard64 />} />
        <Route path="edit-card65" element={<EditCard65 />} />
        <Route path="edit-card66" element={<EditCard66 />} />
        <Route path="edit-card67" element={<EditCard67 />} />
        <Route path="edit-card69" element={<EditCard69 />} />
        <Route path="edit-card70" element={<EditCard70 />} />
        <Route path="edit-card71" element={<EditCard71 />} />
        <Route path="edit-card72" element={<EditCard72 />} />
        <Route path="edit-card73" element={<EditCard73 />} />
        <Route path="edit-card74" element={<EditCard74 />} />
      </Routes>
    </Suspense>
  )
}

export default App
