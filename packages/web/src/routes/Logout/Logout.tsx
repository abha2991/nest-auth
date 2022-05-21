
import {Button} from '@mui/material'
import { PopupState } from 'material-ui-popup-state/core'
import * as React from 'react'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import useLogoutApi from '../../api/useLogoutApi'

const ProfileMenu: FC<PopupState> = ({ children, ...popupState }) => {
    const { mutateAsync } = useLogoutApi()
    const navigate = useNavigate()


    const handleLogout = () => {

        mutateAsync()
        navigate('/home')
    }
    return (



            <Button sx={{backgroundColor:"white!important",color:"#000000e6",margin:"5px"}} onClick={handleLogout}>Logout</Button>

    )
}

export default ProfileMenu
