import { useSetAtom } from 'jotai'
import { selectedMainCategoryNameAtom } from '../../../atoms'
import { selectedSubCategoryNameAtom, subCategoriesAtom } from '../../../../atoms'

const Item = ({ name }: { name: string }) => {
  const setSelectedCategory = useSetAtom(selectedMainCategoryNameAtom)
  const setSelectedSubCategoryName = useSetAtom(selectedSubCategoryNameAtom)
  const setSubCategories = useSetAtom(subCategoriesAtom)
 
  return (
    <button
      onClick={() => {
        setSelectedCategory(name)
        setSelectedSubCategoryName(null)
        setSubCategories(null)
      }}
      className="rounded-sm text-[0.8rem] text-gray-400 duration-300 hover:bg-gray-200"
    >
      {name}
    </button>
  )
}
export default Item
