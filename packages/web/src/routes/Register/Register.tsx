import { LoadingButton } from '@mui/lab'
import { Drawer,Box, Button, Card, CardContent, CardHeader, Divider, Typography, Link } from '@mui/material'
import {createTheme, ThemeProvider, Checkbox} from "@mui/material"
import theme from '../../theme'
import {StyledDivFacebook,StyledDivGoogle , StyledImage} from '../../StyledDiv'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import * as yup from 'yup'
import useRegisterApi from '../../api/useRegisterApi'
import Center from '../../components/Center'
import Form from '../../components/forms/Form'
import FormInput from '../../components/forms/FormInput'
import config from '../../config'
import { IRegisterRequest } from '../../types/auth'

import urlJoin from 'proper-url-join'
import logo from "../img/image 7.png";
import FacebookLogo from "../img/1024px-Facebook_Logo_(2019) 1.png";
import google from "../img/google (1) 1.png";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const schema = yup
  .object({
    firstName: yup.string().min(3).max(26).required(),
    lastName: yup.string().min(3).max(26),
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required()

const defaultValues: IRegisterRequest = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
const socialIcon1={

    padding:"5px",
    border: '1px solid rgba(0, 0, 0, 0.1)' ,
    borderRadius:"5px",
    marginRight:"0px",
    '@media(maxWidth:767px)' : {
        marginRight: '0'
    }



}
const Register: FC = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { mutateAsync, isLoading } = useRegisterApi()
  const navigate = useNavigate()
  const handleSubmit = async (values: IRegisterRequest) => {
    await mutateAsync(values)
    navigate('/')
  }
  return (

<>
 <ThemeProvider theme={theme}>
    <Center>




      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader title="Register" />
        <CardContent>
          <Form<IRegisterRequest> validationSchema={schema} defaultValues={defaultValues} onSuccess={handleSubmit}>
            <FormInput name="firstName" label="First Name" />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="password" label="Password" type="password" />
            <Center mt={4}>
              <LoadingButton loading={isLoading} variant="contained" type="submit" sx={{width:"100%",backgroundColor:"#FF3162!important"}}>
               Register
              </LoadingButton>
            </Center>
            <Center mt={2}>
              <Typography variant="body1">
                Already have an account?{' '}
                <Link component={RouterLink} to="/login">
                  Login Here
                </Link>
              </Typography>
            </Center>
          </Form>
          <Box my={4}>
            <Divider>OR</Divider>
          </Box>
          <Box className="social-login">

            <Button
              href={urlJoin(config.app.apiUrl, 'auth', 'facebook')}


            >
                <StyledImage src={FacebookLogo}/>
              &nbsp;Facebook
            </Button>

            <Button href={urlJoin(config.app.apiUrl, 'auth', 'google')} >
                <StyledImage src={google}/>
              &nbsp;Google
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Center>
      </ThemeProvider>

  </>
  )
}

export default Register
