import Btn from './components/Btn'

const Names = ({ data }: { data: string[] }) => {
  return (
    <div className="flex flex-col gap-4 rounded-l-md bg-gray-200 p-1 text-[0.8rem] font-[500] text-gray-400">
      {data.map((name, index) => {
        return <Btn key={index} name={name} />
      })}
    </div>
  )
}
export default Names
