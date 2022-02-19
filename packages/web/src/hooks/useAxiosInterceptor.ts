import axios from 'axios'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query'
import config from '../config'

axios.defaults.baseURL = config.app.apiUrl
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

const useAxiosInterceptors = () => {
  const queryClient = useQueryClient()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [axiosReady, setAxiosReady] = useState(false)
  useEffect(() => {
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error?.response?.status === 401) {
          queryClient.invalidateQueries()
        } else if (error?.response?.data?.message) {
          enqueueSnackbar(error.response.data.message, { variant: 'error' })
        }
        return Promise.reject(error)
      }
    )
    setAxiosReady(true)
    return () => {
      axios.interceptors.response.eject(responseInterceptor)
    }
  }, [queryClient, enqueueSnackbar])
  return axiosReady
}

export default useAxiosInterceptors
