import { type RouterOutputs } from '@/trpc/shared'
import { atom } from 'jotai'

export const subCategoriesAtom = atom<
  | RouterOutputs['gig']['getSubGigs_WITH_Metadata_WITH_Options']
  | null
  | undefined
>(null)

export const selectedSubCategoryNameAtom = atom<string | null>(null)
export const selectedSubCategoryMetadataAtom = atom((get) => {
  const selectedSubCategoryName = get(selectedSubCategoryNameAtom)
  const subCategories = get(subCategoriesAtom)

  if (!selectedSubCategoryName || !subCategories) return null

  const data = subCategories.find(
    (subCategory) => subCategory.name === selectedSubCategoryName,
  )

  return data?.metadata
})
