import axios from 'axios'
import { useQuery } from 'react-query'


export const CARD_DETAILS = 'CARDETAILS'

const useCardDetailsApi = () => useQuery([CARD_DETAILS], () => axios.get<void>('/cardetails/cardetails'))

export default useCardDetailsApi
