'use client'

import { selectedSubCategoryMetadataAtom } from '../atoms'
import Names from './components/Names'
import { useAtomValue, useSetAtom } from 'jotai'
import Options from './components/Options'
import { selectedMetadataAtom } from './atoms'
import { useEffect } from 'react'

const GigMetadata = () => {
  const selectedSubCategoryMetadata = useAtomValue(
    selectedSubCategoryMetadataAtom,
  )
  const setSelectedMetadata = useSetAtom(selectedMetadataAtom)

  useEffect(() => {
    if (selectedSubCategoryMetadata?.[0]?.name) {
      setSelectedMetadata(selectedSubCategoryMetadata?.[0]?.name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubCategoryMetadata])

  if (!selectedSubCategoryMetadata?.length) return null

  const names = selectedSubCategoryMetadata.map((item) => item.name)
  return (
    <div className="flex w-full animate-fade flex-row rounded-lg border-[0.1rem] border-gray-300">
      <Names data={names} />
      <Options data={selectedSubCategoryMetadata} />
    </div>
  )
}
export default GigMetadata
