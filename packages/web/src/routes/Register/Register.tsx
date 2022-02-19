import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardContent, CardHeader, Divider, Typography, Link } from '@mui/material'
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
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import urlJoin from 'proper-url-join'

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

const Register: FC = () => {
  const { mutateAsync, isLoading } = useRegisterApi()
  const navigate = useNavigate()
  const handleSubmit = async (values: IRegisterRequest) => {
    await mutateAsync(values)
    navigate('/')
  }
  return (
    <Center>
      <Card sx={{ maxWidth: 480 }}>
        <CardHeader title="Register" />
        <CardContent>
          <Form<IRegisterRequest> validationSchema={schema} defaultValues={defaultValues} onSuccess={handleSubmit}>
            <FormInput name="firstName" label="First Name" />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="email" label="Email" type="email" />
            <FormInput name="password" label="Password" type="password" />
            <Center mt={4}>
              <LoadingButton loading={isLoading} variant="contained" type="submit">
                Submit
              </LoadingButton>
            </Center>
            <Center mt={2}>
              <Typography variant="body2">
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

export default Register
