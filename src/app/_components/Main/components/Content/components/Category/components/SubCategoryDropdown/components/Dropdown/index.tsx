import { useAtomValue, useSetAtom } from 'jotai'
import { selectedSubCategoryNameAtom } from '../../../atoms'
import { subCategoriesAtom } from '../../../atoms'
import { isDropdownEnabledAtom } from './atoms'
import Icon from './components/Icon'
import DropdownContent from './components/DropdownContent'
import { api } from '@/src/trpc/react'
import { clsxMerge } from '@/src/utils/clsxMerge'
import { mainCategoriesAtom } from '../../../MainCategoryDropdown/atoms'
import { useEffect } from 'react'

type DropdownProps = {
  selectedMainCategoryName: string
}

const Dropdown = ({ selectedMainCategoryName }: DropdownProps) => {
  const selectedSubCategory = useAtomValue(selectedSubCategoryNameAtom)
  const setIsDropdownEnabled = useSetAtom(isDropdownEnabledAtom)
  const setSubCategories = useSetAtom(subCategoriesAtom)
  const mainCategories = useAtomValue(mainCategoriesAtom)

  console.log(mainCategories)

  const {
    data: dropdownData,
    isLoading,
    isError,
    isFetched,
  } = api.gig.getSubGigs_WITH_Metadata_WITH_Options.useQuery({
    parentGigID: mainCategories!.find(
      (category) => category.name === selectedMainCategoryName,
    )!.ID,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setSubCategories(dropdownData), [dropdownData])

  const handleOnClick = () => setIsDropdownEnabled((prev) => !prev)

  return (
    <div
      className={clsxMerge('relative animate-fade duration-300', {
        'opacity-50': isLoading,
      })}
    >
      <div
        onClick={handleOnClick}
        className="flex cursor-pointer flex-row items-center gap-2 rounded-md border-[0.05rem] border-gray-400 bg-gray-100 px-2 py-1 text-[0.8rem] text-gray-400"
      >
        <div>
          {!selectedSubCategory ? 'Alt kategori seçiniz' : selectedSubCategory}
        </div>
        <Icon />
        <DropdownContent />
      </div>
    </div>
  )
}
export default Dropdown
