import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardContent, CardHeader, Divider, Link, Typography } from '@mui/material'
import urlJoin from 'proper-url-join'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Link as RouterLink, Location, useLocation } from 'react-router-dom'
import * as yup from 'yup'
import useLoginApi from '../../api/useLoginApi'
import Center from '../../components/Center'
import Form from '../../components/forms/Form'
import FormInput from '../../components/forms/FormInput'
import config from '../../config'
import useModifiedRecoilState from '../../hooks/useModifiedRecoilState'
import useQueryParams from '../../hooks/useQueryParams'
import redirectState from '../../recoil/atoms/redirectState'
import { StyledImage } from '../../StyledDiv'
import { ILoginRequest } from '../../types/auth'
import FacebookLogo from '../img/1024px-Facebook_Logo_(2019) 1.png'
import google from '../img/google (1) 1.png'
import Footer from '../Footer'

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required()

const defaultValues: ILoginRequest = {
  email: '',
  password: ''
}

interface idRouteParams {
  Id: any
}
const Login: FC = () => {
  const id = useQueryParams()

  const { mutateAsync, isLoading } = useLoginApi()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [, setRedirect] = useModifiedRecoilState(redirectState)
  useEffect(() => {
    if (state) {
      setRedirect(state as { from: Location })
    }
  }, [state, setRedirect])

  let googleurl = urlJoin(config.app.apiUrl, 'auth', 'google')

  let GoogleLogin

  GoogleLogin = async () => {}
  let handleSubmit: any
  // @ts-ignore
  const { id: id2 } = id

  if (!id2) {
    handleSubmit = async (values: ILoginRequest) => {
      await mutateAsync(values)

      navigate('/')
    }
  } else if (id2) {
    handleSubmit = async (values: ILoginRequest) => {
      let a = await mutateAsync(values)
      // @ts-ignore

      await navigate(`/card${id2}?id=${id2}`)
    }
    // }
    // else if(!id)
    // {

    //   handleSubmit = async (values: ILoginRequest) => {
    //     await mutateAsync(values)
    //
    //     navigate('/')
    // }
  }

  return (
    <>
      <Center>
        <Card sx={{ maxWidth: 480 }}>
          {/*<CardHeader title="Login" />*/}
          <CardContent>
            <Form<ILoginRequest> validationSchema={schema} defaultValues={defaultValues} onSuccess={handleSubmit}>
              <FormInput name="email" label="Email" type="email" />
              <FormInput name="password" label="Password" type="password" />
              <Center mt={4}>
                <LoadingButton
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                  sx={{
                    width: '100%',
                    backgroundColor: '#FF3162!important'
                  }}
                >
                  Login
                </LoadingButton>
              </Center>
              <Center mt={2}>
                <Typography variant="body1">
                  Don't have an account?{' '}
                  <Link component={RouterLink} to="/registration">
                    Register Here
                  </Link>
                </Typography>
              </Center>
            </Form>
            <Box my={4}>
              <Divider>OR</Divider>
            </Box>
            {/*<Center flexDirection="row">*/}
            {/*  <Button*/}
            {/*    href={urlJoin(config.app.apiUrl, 'auth', 'facebook')}*/}
            {/*    sx={{ width: 120 }}*/}
            {/*    startIcon={<FacebookIcon />}*/}
            {/*  >*/}
            {/*    Facebook*/}
            {/*  </Button>*/}
            {/*  <Box width={24} />*/}
            {/*  <Button href={urlJoin(config.app.apiUrl, 'auth', 'google')} sx={{ width: 120 }} startIcon={<GoogleIcon />}>*/}
            {/*    Google*/}
            {/*  </Button>*/}
            {/*</Center>*/}
            <Box className="social-login">
              <Button href={urlJoin(config.app.apiUrl, 'auth', 'facebook')}>
                <StyledImage src={FacebookLogo} />
                &nbsp;Facebook
              </Button>

              <Button
                //onClick={GoogleLogin}
                href={urlJoin(config.app.apiUrl, 'auth', 'google')}
              >
                <StyledImage src={google} />
                &nbsp;Google
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Center>
    </>
  )
}

export default Login
