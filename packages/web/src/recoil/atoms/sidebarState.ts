import { atom } from 'recoil'

const key = 'SIDEBAR'

const sidebarState = atom<boolean>({
  key,
  default: true
})

export default sidebarState
