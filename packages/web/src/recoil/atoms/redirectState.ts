import { Location } from 'react-router-dom'
import { atom } from 'recoil'
import StorageEffect from '../effects/StorageEffect'

export type RedirectStateType = { from: Location } | null

const key = 'REDIRECT'

const redirectState = atom<RedirectStateType>({
  key,
  default: null,
  effects_UNSTABLE: [StorageEffect(key, sessionStorage)]
})

export default redirectState
