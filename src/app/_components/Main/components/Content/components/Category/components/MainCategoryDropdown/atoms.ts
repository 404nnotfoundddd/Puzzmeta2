import { atom } from 'jotai'
import { type RouterOutputs } from '@/trpc/shared'

export const isDropdownEnabledAtom = atom<boolean>(false)
export const selectedMainCategoryNameAtom = atom<string | null>(null)

export const mainCategoriesAtom = atom<
  RouterOutputs['gig']['getAllGigs'] | null | undefined
>(null)
