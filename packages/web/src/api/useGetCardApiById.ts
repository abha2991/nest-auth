import axios from 'axios'
import { useMutation } from 'react-query'
import { CardUserDetails, IGetCardUser } from '../types/card'

export const GET_CARD = 'GETCARD'

const useGetCardApiById = () =>
    useMutation([GET_CARD], async (input: CardUserDetails) => axios.post<IGetCardUser>('/card1/findCardById', input))

export default useGetCardApiById
