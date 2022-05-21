


import { MenuOutlined } from '@mui/icons-material'
import { AppBar as MuiAppBar, Avatar, IconButton, styled, Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { bindTrigger } from 'material-ui-popup-state'
import { usePopupState } from 'material-ui-popup-state/hooks'
import * as React from 'react'
import { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import useProfileApi from '../../api/useProfileApi'
import ProfileMenu from '../../components/ProfileMenu'
import useMobileView from '../../hooks/useMobileView'
import sidebarState from '../../recoil/atoms/sidebarState'

const AppBar = styled(MuiAppBar)(({ theme }) => ({ zIndex: theme.zIndex.drawer + 1 }))

const Header: FC = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'profile-menu' })
  const { data: profile } = useProfileApi()
  const mobileView = useMobileView('md')
  const setSidebarState = useSetRecoilState(sidebarState)

  return (
      <AppBar>
      <Toolbar sx={{ py: 0.5 }}>
        {mobileView && (
            <IconButton sx={{ ml: -1, mr: 1 }} color="inherit" onClick={() => setSidebarState((value) => !value)}>
            <MenuOutlined />
          </IconButton>
        )}
        <Typography variant="h6">Heart Envite</Typography>
        <Box flex={1} />

        <IconButton size="small" {...bindTrigger(popupState)}>
          <Avatar sx={{ width: 36, height: 36, backgroundColor: 'primary.light' }} src={profile?.profileImage}>
            {profile?.firstName?.slice(0, 1)}
          </Avatar>
        </IconButton>
        <ProfileMenu {...popupState} />

   </Toolbar>
    </AppBar>
  )
}

export default Header




// import {Box, Button,Link, Container} from '@mui/material'
// import { FC, useEffect } from 'react'
// import { useNavigate } from 'react-router'
//
// import AppBar from '@mui/material/AppBar';
// import SearchIcon from '@mui/icons-material/Search';
// import Toolbar from '@mui/material/Toolbar';
// import logo from "../img/image 7.png";
// import play from "../img/Group.png";
// import translate from "../img/Group1.png";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import useProfileApi from '../../api/useProfileApi'
// import ProfileMenu from '../../components/ProfileMenu'
// import * as React from 'react';
// import MenuItem from '@mui/material/MenuItem';
//
// import Menu from '@mui/material/Menu';
// import {StyledImage} from '../../StyledDiv'
//
//
// const settings=[{link:'/login',name:'Login'},{link:'/cart',name:'My Cart'},{link:'/dashboard',name:'Dashboard'}]
//
//
// const Header: FC = () => {
//
//   const { data: profile } = useProfileApi()
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//
//   const handleOpenNavMenu = (event:any) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event:any) => {
//     setAnchorElUser(event.currentTarget);
//   };
//
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//
//   const navigate = useNavigate()
//
//
//   return (
//       <Box  sx={{backgroundColor:"white"}}>
//
// <Container>
//             <Box>
//
//       <AppBar  sx={{backgroundColor:"white",boxShadow:"none"}} position="static">
//
//         <Toolbar>
// <Box  sx={{ flexGrow: 1 }}>
//            <StyledImage  src={logo}></StyledImage>
//     </Box>
//
//             <Button  sx={{backgroundColor:"#FF3767",mr:1,display: { xs: 'none', sm: 'block' }}}>
//                 <StyledImage  sx={{ mr: 1}} src={play}></StyledImage>Try Our App</Button>
//             <StyledImage  sx={{ mr: 1}} src={translate}></StyledImage>
//          <SearchIcon sx={{ mr: 2,color:"#909090"}}/>
//
//           <IconButton
//               size="large"
//               edge="start"
//
//               aria-label="menu"
//               sx={{ mr: 2 ,color:"#909090",p: 0 }}
//               onClick={handleOpenUserMenu}
//           >
//             <MenuIcon />
//           </IconButton>
//              <Menu
//                  sx={{ mt: '45px' }}
//                  id="menu-appbar"
//                  anchorEl={anchorElUser}
//                  anchorOrigin={{
//                    vertical: 'top',
//                    horizontal: 'right',
//                  }}
//                  keepMounted
//                  transformOrigin={{
//                    vertical: 'top',
//                    horizontal: 'right',
//                  }}
//                  open={Boolean(anchorElUser)}
//                  onClose={handleCloseUserMenu}
//              >
//              {/*{settings.map((value,index) => (*/}
//                <MenuItem >
//
//                       <Link textAlign="center" href="/login" underline="none" color="#909090">Login</Link>
//
//
//                 </MenuItem>
//                   <MenuItem >
//
//                       <Link textAlign="center" href="/login" underline="none" color="#909090">Login</Link>
//
//
//                 </MenuItem>
//                  <MenuItem> <Button  sx={{backgroundColor:"#FF3767",mr:1,display: { xs: 'block', sm: 'none' }}}>
//                 <StyledImage  sx={{ mr: 1}} src={play}></StyledImage>Try Our App</Button></MenuItem>
//                {/*))}*/}
//             </Menu>
//
//         </Toolbar>
//
//       </AppBar>
//     </Box>
// </Container>
//         </Box>
//   )
// }
//
// export default Header

