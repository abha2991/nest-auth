import { yupResolver } from '@hookform/resolvers/yup'
import { FormHTMLAttributes, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { UseFormProps } from 'react-hook-form/dist/types'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form/dist/types/form'
import * as yup from 'yup'

export type FormProps<T> = UseFormProps<T, any> & {
  FormProps?: FormHTMLAttributes<HTMLFormElement>
  children?: ReactNode
  validationSchema?: yup.AnyObjectSchema
  onSuccess: SubmitHandler<T>
  onError?: SubmitErrorHandler<T>
}

function Form<T>({ children, validationSchema, onSuccess, onError, FormProps, ...props }: FormProps<T>) {
  const methods = useForm<T>({
    ...(validationSchema ? { resolver: yupResolver(validationSchema) } : {}),
    ...props
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSuccess, onError)} noValidate {...FormProps}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
