import { useAtomValue } from 'jotai'
import { selectedMetadataAtom } from '../atoms'
import { Fragment } from 'react'

type OptionsProps = {
  data: {
    name: string
    subGigMetadataOptions: {
      name: string
    }[]
  }[]
}

const Options = ({ data }: OptionsProps) => {
  const selectedMetadata = useAtomValue(selectedMetadataAtom)
  console.log(data, selectedMetadata)
  return (
    <div className="flex w-full flex-col gap-4 p-2 text-[0.8rem] text-gray-500">
      {data.map((item, index) => {
        if (item.name != selectedMetadata) return null

        return item.subGigMetadataOptions.map((option, index) => {
          return (
            <div key={index} className="flex flex-row gap-2">
              <input
                type="radio"
                id={option.name}
                name={selectedMetadata + 'Option'}
                key={index.toString()}
                className="flex flex-row items-center"
                value={option.name}
              />
              <label className="w-full" htmlFor={option.name}>
                {option.name}
              </label>
            </div>
          )
        })
      })}
    </div>
  )
}
export default Options
