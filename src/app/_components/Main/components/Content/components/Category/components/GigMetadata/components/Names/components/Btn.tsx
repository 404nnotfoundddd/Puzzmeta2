import { useAtom } from 'jotai'
import { selectedMetadataAtom } from '../../../atoms'
import { clsxMerge } from '@/src/utils/clsxMerge'

type BtnProps = {
  name: string
}

const Btn = ({ name }: BtnProps) => {
  const [selectedMetadata, setSelectedMetadata] = useAtom(selectedMetadataAtom)

  return (
    <button
      onClick={() => setSelectedMetadata(name)}
      className={clsxMerge('rounded-md p-1 hover:bg-gray-300', {
        'bg-gray-300': selectedMetadata === name,
      })}
    >
      {name}
    </button>
  )
}
export default Btn
