import { useSetAtom } from 'jotai'
import { selectedSubCategoryNameAtom } from '../../../../../../atoms'

const Item = ({ name }: { name: string }) => {
  const setSelectedCategory = useSetAtom(selectedSubCategoryNameAtom)

  return (
    <button
      onClick={() => setSelectedCategory(name)}
      className="rounded-sm text-[0.8rem] text-gray-400 duration-300 hover:bg-gray-200"
    >
      {name}
    </button>
  )
}
export default Item
