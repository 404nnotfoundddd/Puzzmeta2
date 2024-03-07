'use client'

import { clsxMerge } from '@/src/utils/clsxMerge'
import { useAtomValue } from 'jotai'
import { progressAtom } from '../atoms'

type BoxProps = {
  level: 1 | 2 | 3 | 4 | 5
}

const Box = ({ level }: BoxProps) => {
  const progress = useAtomValue(progressAtom)

  return (
    <div
      className={clsxMerge(
        'h-[1rem] w-[5rem] rounded-lg shadow-[0_0px_10px_1px_rgba(0,0,0,0.2)]',
        {
          'bg-gradient-to-tr from-blue-400 to-purple-500 shadow-[0_0px_20px_1px_#60a5fa8f]':
            level <= progress,
        },
      )}
    ></div>
  )
}
export default Box
