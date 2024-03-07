'use client'

import { useAtomValue } from 'jotai'
import { selectedMainCategoryNameAtom } from '../MainCategoryDropdown/atoms'
import Dropdown from './components/Dropdown'

const SubCategoryDropdown = () => {
  const selectedMainCategoryName = useAtomValue(selectedMainCategoryNameAtom)

  if (!selectedMainCategoryName) return null
  return <Dropdown selectedMainCategoryName={selectedMainCategoryName} />
}
export default SubCategoryDropdown
