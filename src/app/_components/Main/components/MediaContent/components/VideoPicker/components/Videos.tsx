'use client'

import { useAtomValue } from 'jotai'
import { videosSourcesAtom } from './atoms'
import ReactPlayer from 'react-player'

const Videos = () => {
  const videoSrcs = useAtomValue(videosSourcesAtom)

  if (videoSrcs.length == 0 || !videoSrcs) return null

  return (
    <div className=" flex flex-row gap-1">
      {videoSrcs.map((src, index) => {
        return (
          <ReactPlayer
            key={index}
            style={{
              borderRadius: '0.375rem',
            }}
            url={src}
            controls={true}
          />
        )
      })}
    </div>
  )
}
export default Videos
