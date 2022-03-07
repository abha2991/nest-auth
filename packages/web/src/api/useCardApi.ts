import axios from 'axios'
import { useMutation } from 'react-query'
import { BrideDetails,GroomDetails } from '../types/card'


export const CARD_QUERY_KEY = 'CARD'

const useCardApi = () =>
    useMutation([CARD_QUERY_KEY], (input: BrideDetails) => axios.post<void>('/card/card', input))

export default useCardApi
