import { useAtomValue } from 'jotai'
import { inputTextLengthAtom } from '../atoms'

const InputTextLength = () => {
  const length = useAtomValue(inputTextLengthAtom)

  return <div className="text-[0.7rem] text-gray-500">{length} / 1000</div>
}
export default InputTextLength
