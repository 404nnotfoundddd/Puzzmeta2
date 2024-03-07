import { useAtomValue } from 'jotai'
import { isDropdownEnabledAtom } from '../../atoms'
import { clsxMerge } from '@/src/utils/clsxMerge'
import { subCategoriesAtom } from '../../../../../atoms'
import Item from './components/Item'

const DropdownContent = () => {
  const isDropdownEnabled = useAtomValue(isDropdownEnabledAtom)
  const subCategories = useAtomValue(subCategoriesAtom)

  return (
    <div
      className={clsxMerge(
        'absolute left-0 top-10 flex w-full animate-fade flex-col gap-1 rounded-md border-[0.05rem] border-gray-400 bg-gray-100 p-1 shadow-[0_0px_20px_1px_rgba(0,0,0,0.15)] animate-duration-300',
        {
          hidden: !isDropdownEnabled,
        },
      )}
    >
      {subCategories?.map((category, index) => (
        <Item key={index} name={category.name} />
      ))}
    </div>
  )
}
export default DropdownContent
