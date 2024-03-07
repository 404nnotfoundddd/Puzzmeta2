'use client'

import { useSetAtom } from 'jotai'
import { type KeyboardEvent } from 'react'
import { inputTextLengthAtom } from '../atoms'
import { setTagsAtom } from './atoms'

const Input = () => {
  const setInputTextLength = useSetAtom(inputTextLengthAtom)
  const setTags = useSetAtom(setTagsAtom)

  const handleOnInput = (e: KeyboardEvent<HTMLInputElement>) =>
    setInputTextLength(e.currentTarget.value.length)

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setTags(e.currentTarget.value)
      e.currentTarget.value = ''
    }
  }

  return (
    <input
      onInput={handleOnInput}
      onKeyDown={handleOnKeyDown}
      type="text"
      maxLength={70}
      className="grow text-[0.85rem] text-gray-700"
    />
  )
}
export default Input
