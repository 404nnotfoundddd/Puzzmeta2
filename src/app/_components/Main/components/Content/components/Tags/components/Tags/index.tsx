import { useAtomValue } from 'jotai'
import { tagsAtom } from '../atoms'
import Item from './components/Item'

const Tags = () => {
  const tags = useAtomValue(tagsAtom)
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Item key={index} text={tag} />
      ))}
    </div>
  )
}
export default Tags
