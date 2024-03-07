'use client'

import { Fragment } from 'react'
import Input from './components/Input'
import InputTextLength from './components/InputTextLength'
import Tags from './components/Tags'

const Title = () => {
  return (
    <div className="border- flex flex-col rounded-md border-[0.1rem] border-gray-300">
      <div className=" rounded-md bg-gray-100 p-1 text-[0.8rem] text-gray-400">
        Etiket ekleyin
      </div>
      <div className="flex flex-col items-start gap-1 p-1">
        <Tags />
        <div className="flex w-full flex-row items-start gap-1 p-1">
          <Input />
          <InputTextLength />
        </div>
      </div>
    </div>
  )
}
export default Title
