'use client'

import { useSetAtom } from 'jotai'
import { type ChangeEvent } from 'react'
import { inputTextLengthAtom } from '../atoms'

const Input = () => {
  const setInputTextLength = useSetAtom(inputTextLengthAtom)

  const handleOnInput = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setInputTextLength(e.currentTarget.value.length)

  return (
    <textarea
      onChange={handleOnInput}
      maxLength={1000}
      className="h-40 grow p-1 text-[0.85rem] text-gray-700 outline-none"
    />
  )
}
export default Input
