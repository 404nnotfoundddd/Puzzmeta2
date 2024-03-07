'use client'

import { useSetAtom } from 'jotai'
import { videosSourcesAtom } from './atoms'
import { Fragment, useRef } from 'react'

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const setImgSrcs = useSetAtom(videosSourcesAtom)

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
        accept="video/*"
        type="file"
        id="videoFiles"
        multiple
      />
    </Fragment>
  )
}
export default Input
