
import {Box, Button,Link, Container} from '@mui/material'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router'

import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import logo from "../img/image 7.png";
import play from "../img/Group.png";
import translate from "../img/Group1.png";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';
import {StyledImage} from '../../StyledDiv'


const settings=[{link:'/login',name:'Login'},{link:'/cart',name:'My Cart'},{link:'/dashboard',name:'Dashboard'}]


const MuiHeader: FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event:any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event:any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate()


    return (
        <Box  sx={{backgroundColor:"white"}}>

<Container>
            <Box>

      <AppBar  sx={{backgroundColor:"white",boxShadow:"none"}} position="static">

        <Toolbar>
<Box  sx={{ flexGrow: 1 }}>
           <StyledImage  src={logo}></StyledImage>
    </Box>

            <Button  sx={{backgroundColor:"#FF3767",mr:1,display: { xs: 'none', sm: 'block' }}}>
                <StyledImage  sx={{ mr: 1}} src={play}></StyledImage>Try Our App</Button>
            <StyledImage  sx={{ mr: 1}} src={translate}></StyledImage>
         <SearchIcon sx={{ mr: 2,color:"#909090"}}/>

          <IconButton
                size="large"
                edge="start"

                aria-label="menu"
                sx={{ mr: 2 ,color:"#909090",p: 0 }}
                onClick={handleOpenUserMenu}
            >
            <MenuIcon />
          </IconButton>
             <Menu
                 sx={{ mt: '45px' }}
                 id="menu-appbar"
                 anchorEl={anchorElUser}
                 anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                 }}
                 keepMounted
                 transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                 }}
                 open={Boolean(anchorElUser)}
                 onClose={handleCloseUserMenu}
             >
             {/*{settings.map((value,index) => (*/}
                  <MenuItem >

                      <Link textAlign="center" href="/login" underline="none" color="#909090">Login</Link>


                </MenuItem>
                  <MenuItem >

                      <Link textAlign="center" href="/login" underline="none" color="#909090">Login</Link>


                </MenuItem>
                 <MenuItem> <Button  sx={{backgroundColor:"#FF3767",mr:1,display: { xs: 'block', sm: 'none' }}}>
                <StyledImage  sx={{ mr: 1}} src={play}></StyledImage>Try Our App</Button></MenuItem>
          {/*))}*/}
            </Menu>

        </Toolbar>

      </AppBar>
    </Box>
</Container>
        </Box>
)
}

export default MuiHeader
