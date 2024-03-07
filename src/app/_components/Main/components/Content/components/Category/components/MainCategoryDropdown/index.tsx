'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { selectedMainCategoryNameAtom, mainCategoriesAtom } from './atoms'
import { isDropdownEnabledAtom } from './atoms'
import Icon from './components/Icon'
import DropdownContent from './components/DropdownContent'
import { api } from '@/src/trpc/react'
import { clsxMerge } from '@/src/utils/clsxMerge'
import { useEffect } from 'react'

const MainCategoryDropdown = () => {
  const selectedMainCategory = useAtomValue(selectedMainCategoryNameAtom)
  const setIsDropdownEnabled = useSetAtom(isDropdownEnabledAtom)
  const setMainCategories = useSetAtom(mainCategoriesAtom)
 const {
    data: dropdownData,
    isLoading,
    isError,
    isFetched,
  } = api.gig.getAllGigs.useQuery()

  useEffect(() => {
    setMainCategories(dropdownData)
  }, [dropdownData])

  const handleOnClick = () => {
    setIsDropdownEnabled((prev) => !prev)
   
  }

  return (
    <div
      className={clsxMerge('relative duration-300', {
        'opacity-50': isLoading,
      })}
    >
      <div
        onClick={handleOnClick}
        className="flex cursor-pointer flex-row items-center gap-2 rounded-md border-[0.05rem] border-gray-400 bg-gray-100 px-2 py-1 text-[0.8rem] text-gray-400"
      >
        <div>
          {!selectedMainCategory
            ? 'Ana kategori seçiniz'
            : selectedMainCategory}
        </div>
        <Icon />
        <DropdownContent />
      </div>
    </div>
  )
}
export default MainCategoryDropdown
