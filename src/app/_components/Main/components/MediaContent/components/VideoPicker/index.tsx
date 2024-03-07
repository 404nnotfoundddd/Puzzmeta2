import Input from './components/Input'
import Videos from './components/Videos'

const VideoPicker = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 overflow-x-auto">
      <Input />
      <Videos />
    </div>
  )
}
export default VideoPicker
