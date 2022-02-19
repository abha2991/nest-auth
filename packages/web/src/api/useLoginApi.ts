import axios from 'axios'
import { useMutation } from 'react-query'
import { ILoginRequest, ILoginResponse } from '../types/auth'

export const LOGIN_QUERY_KEY = 'LOGIN'

const useLoginApi = () =>
  useMutation([LOGIN_QUERY_KEY], async (input: ILoginRequest) => axios.post<ILoginResponse>('/auth/login', input))

export default useLoginApi
