import { useSetAtom } from 'jotai'
import { removeFromTagsAtom } from '../../atoms'

const Item = ({ text }: { text: string }) => {
  const removeTag = useSetAtom(removeFromTagsAtom)
  const handleOnClick = () => removeTag(text)

  return (
    <div
      onClick={handleOnClick}
      className="animate-fade cursor-pointer rounded-md bg-gray-200 px-2 py-1 text-[0.7rem] text-gray-500"
    >
      {text}
    </div>
  )
}
export default Item
