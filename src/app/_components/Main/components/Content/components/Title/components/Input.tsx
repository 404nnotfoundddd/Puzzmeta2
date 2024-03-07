'use client'

import { useSetAtom } from 'jotai'
import { type KeyboardEvent } from 'react'
import { inputTextLengthAtom } from '../atoms'

const Input = () => {
  const setInputTextLength = useSetAtom(inputTextLengthAtom)

  const handleOnInput = (e: KeyboardEvent<HTMLInputElement>) =>
    setInputTextLength(e.currentTarget.value.length)

  return (
    <input
      onInput={handleOnInput}
      type="text"
      placeholder=""
      maxLength={70}
      className="grow text-[0.85rem] text-gray-700"
    />
  )
}
export default Input
