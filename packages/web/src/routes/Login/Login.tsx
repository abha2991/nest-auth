import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardContent, CardHeader, Divider, Typography, Link } from '@mui/material'
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
import redirectState from '../../recoil/atoms/redirectState'
import { ILoginRequest } from '../../types/auth'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import urlJoin from 'proper-url-join'

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

const Login: FC = () => {
  const { mutateAsync, isLoading } = useLoginApi()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [, setRedirect] = useModifiedRecoilState(redirectState)
  useEffect(() => {
    if (state) {
      setRedirect(state as { from: Location })
    }
  }, [state, setRedirect])
  const handleSubmit = async (values: ILoginRequest) => {
    await mutateAsync(values)
    navigate('/')
  }
  return (
    <Center>
      <Card sx={{ maxWidth: 480 }}>
        <CardHeader title="Login" />
        <CardContent>
          <Form<ILoginRequest> validationSchema={schema} defaultValues={defaultValues} onSuccess={handleSubmit}>
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="password" label="Password" type="password" />
            <Center mt={4}>
              <LoadingButton loading={isLoading} variant="contained" type="submit">
                Submit
              </LoadingButton>
            </Center>
            <Center mt={2}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Link component={RouterLink} to="/register">
                  Register Here
                </Link>
              </Typography>
            </Center>
          </Form>
          <Box my={4}>
            <Divider>OR</Divider>
          </Box>
          <Center flexDirection="row">
            <Button
              href={urlJoin(config.app.apiUrl, 'auth', 'facebook')}
              sx={{ width: 120 }}
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
            <Box width={24} />
            <Button href={urlJoin(config.app.apiUrl, 'auth', 'google')} sx={{ width: 120 }} startIcon={<GoogleIcon />}>
              Google
            </Button>
          </Center>
        </CardContent>
      </Card>
    </Center>
  )
}

export default Login
