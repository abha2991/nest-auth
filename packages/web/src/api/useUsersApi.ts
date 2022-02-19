import axios from 'axios'
import { useQuery } from 'react-query'
import { IUser } from '../types/user'

export const USERS_QUERY_KEY = 'USERS'

const useUsersApi = () => useQuery([USERS_QUERY_KEY], () => axios.get<IUser[]>('/users'))

export default useUsersApi
