import axios from 'axios'
import { useQuery } from 'react-query'
import { IUser } from '../types/user'

export const PROFILE_QUERY_KEY = 'PROFILE'

const useProfileApi = () => useQuery([PROFILE_QUERY_KEY], () => axios.get<IUser>('/auth/me'))

export default useProfileApi
