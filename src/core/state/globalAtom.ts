import { atom } from 'recoil'

export const globalAtom = atom({
  key: "globalAtom",
  default: "test"
})