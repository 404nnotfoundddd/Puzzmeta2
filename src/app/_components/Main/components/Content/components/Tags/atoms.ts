import { atom } from 'jotai'
import { type inputTextLengthAtomType } from './types/inputTextLengthAtom'

export const inputTextLengthAtom = atom<number>(0)
