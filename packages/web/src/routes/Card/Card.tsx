import { LoadingButton } from '@mui/lab'
import { Box, Button, Card, CardContent, CardHeader, Divider, Typography, Link } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import * as yup from 'yup'
import useCardApi from '../../api/useCardApi'
import Center from '../../components/Center'
import Form from '../../components/forms/Form'
import FormInput from '../../components/forms/FormInput'
import config from '../../config'
import { BrideDetails,GroomDetails } from '../../types/card'


import urlJoin from 'proper-url-join'

const schema = yup
    .object({
        brideName: yup.string().min(3).max(26).required(),
        groomName: yup.string().min(3).max(26).required(),
        fatherName: yup.string().min(3).max(26).required(),
        motherName: yup.string().min(3).max(26).required(),
        grandFatherName: yup.string().min(3).max(26),
        grandMotherName: yup.string().min(3).max(26),
    })
    .required()

const brideValues:  BrideDetails = {
    brideName: '',
    fatherName: '',
    motherName: '',
    grandFatherName: '',
    grandMotherName: '',
}

const groomValues:  GroomDetails = {
    groomName: '',
    fatherName: '',
    motherName: '',
    grandFatherName: '',
    grandMotherName: '',
}

const CardDetails: FC = () => {
    const { mutateAsync, isLoading } = useCardApi()
    const navigate = useNavigate()
    const handleSubmit = async (values: BrideDetails) => {
        await mutateAsync(values)
        navigate('/')
    }
    return (
        <Center>
      <Card sx={{ maxWidth: 480 }}>
        <CardHeader title="Details" />
        <CardContent>
          <Form<BrideDetails> validationSchema={schema} defaultValues={brideValues} onSuccess={handleSubmit}>
            <FormInput name="brideName" label="Bride Name" />
            <FormInput name="fatherName" label="Father's Name" />
            <FormInput name="motherName" label="Mother's Name"  />
            <FormInput name="grandFatherName" label="Grand Father's Name"  />
              <FormInput name="grandMotherName" label="Grand Mother's Name"  />
            <Center mt={4}>
              <LoadingButton loading={isLoading} variant="contained" type="submit">
                Submit
              </LoadingButton>
            </Center>

          </Form>


        </CardContent>
      </Card>
    </Center>
    )
}

export default CardDetails
