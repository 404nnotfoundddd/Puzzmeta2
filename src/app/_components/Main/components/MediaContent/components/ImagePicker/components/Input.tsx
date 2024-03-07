'use client'

import { useSetAtom } from 'jotai'
import { imagesSources } from './atoms'
import { Fragment, useRef } from 'react'

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setImgSrcs = useSetAtom(imagesSources)

  return (
    <Fragment>
      <input
        ref={inputRef}
        onChange={() => {
          if (inputRef.current?.files) {
            const files = Array.from(inputRef.current.files)

            const imgSrc = files.map((item: File) => {
              return URL.createObjectURL(item)
            })

            setImgSrcs(imgSrc)
          }
        }}
        className="hidden"
        accept="image/*"
        type="file"
        id="imgFiles"
        multiple
      />
    
    </Fragment>
  )
}
export default Input
