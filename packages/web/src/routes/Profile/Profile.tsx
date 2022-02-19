import { Container } from '@mui/material'
import { FC } from 'react'
import useProfileApi from '../../api/useProfileApi'

const Profile: FC = () => {
  const { data: profile } = useProfileApi()
  return <Container>{JSON.stringify(profile, null, 2)}</Container>
}

export default Profile
