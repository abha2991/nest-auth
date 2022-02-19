import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

export const LOGOUT_QUERY_KEY = 'LOGOUT'

const useLogoutApi = () => {
  const queryClient = useQueryClient()
  return useMutation([LOGOUT_QUERY_KEY], () => axios.post<void>('/auth/logout'), {
    onSuccess: () => queryClient.invalidateQueries()
  })
}

export default useLogoutApi
