'use client'

import { Fragment } from 'react'
import Input from './components/Input'
import InputTextLength from './components/InputTextLength'

const Title = () => {
  return (
    <div className="border- flex flex-col rounded-md border-[0.1rem] border-gray-300">
      <div className=" rounded-md bg-gray-100 p-1 text-[0.8rem] text-gray-400">
        Başlık
      </div>
      <div className="flex flex-row gap-1 p-1">
        <Input />
        <InputTextLength />
      </div>
    </div>
  )
}
export default Title
