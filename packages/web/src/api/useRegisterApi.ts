import axios from 'axios'
import { useMutation } from 'react-query'
import { IRegisterRequest, ILoginResponse } from '../types/auth'

export const REGISTER_QUERY_KEY = 'REGISTER'

const useRegisterApi = () =>
  useMutation([REGISTER_QUERY_KEY], (input: IRegisterRequest) => axios.post<ILoginResponse>('/auth/register', input))

export default useRegisterApi
