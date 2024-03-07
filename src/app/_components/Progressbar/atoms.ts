import { atom } from 'jotai'

export const progressAtom = atom<1 | 2 | 3 | 4 | 5>(2)
