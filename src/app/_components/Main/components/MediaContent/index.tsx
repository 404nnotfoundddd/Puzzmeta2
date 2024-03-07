import ImagePicker from './components/ImagePicker'
import VideoPicker from './components/VideoPicker'
import Labels from './components/Labels'

const MediaContent = () => {
  return (
    <section className="flex w-[30rem] flex-col items-start gap-2">
      <div className="pb-1 text-lg font-[500] text-gray-500">
        İlanınızın tanıtımı için görsel veya video ekleyin
      </div>
      <Labels />
      <ImagePicker />
      <VideoPicker />
    </section>
  )
}
export default MediaContent
