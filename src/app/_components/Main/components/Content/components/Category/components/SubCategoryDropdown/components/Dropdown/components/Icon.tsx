import { useAtomValue } from 'jotai'
import { isDropdownEnabledAtom } from '../atoms'
import clsx from 'clsx'

const Icon = () => {
  const isDropdownEnabled = useAtomValue(isDropdownEnabledAtom)

  return (
    <div
      className={clsx('rotate-0 duration-300', {
        'rotate-180': isDropdownEnabled,
      })}
    >
      ▼
    </div>
  )
}
export default Icon
