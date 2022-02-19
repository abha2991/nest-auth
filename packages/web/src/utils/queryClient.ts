import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: false,
      cacheTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity
    }
  }
})

export default queryClient
