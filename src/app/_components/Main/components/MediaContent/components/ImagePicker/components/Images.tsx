'use client'

import { useAtomValue } from 'jotai'
import { imagesSources } from './atoms'
import Image from 'next/image'
import { MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

const Images = () => {
  const imageSrcs = useAtomValue(imagesSources)
  const router = useRouter()

  if (imageSrcs.length == 0 || !imageSrcs) return null

  return (
    <div className=" flex flex-row gap-1">
      {imageSrcs.map((src, index) => {
        return (
          <div
            className="flex w-40 items-center justify-center rounded-md border-[0.15rem] border-gray-300 bg-gray-500"
            key={index}
          >
            <Image
              onClick={(e: MouseEvent<HTMLImageElement>) =>
                router.push((e.target as HTMLImageElement).src)
              }
              src={src}
              sizes='sa'
              className="object-cover"
              alt={'selected_image_' + index}
              width={140}
              height={100}
            />
          </div>
        )
      })}
    </div>
  )
}
export default Images
