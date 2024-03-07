import Input from './components/Input'
import Images from './components/Images'

const ImagePicker = () => {
  return (
    <div className="flex w-full flex-col items-start gap-2 overflow-x-auto">
      <Input />
      <Images />
    </div>
  )
}
export default ImagePicker
