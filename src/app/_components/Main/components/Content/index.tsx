import Title from './components/Title'
import Description from './components/Description'
import Tags from './components/Tags'
import Category from './components/Category'

const Content = () => {
  return (
    <section className="flex w-[30rem] flex-col gap-2">
      <div className="pb-1 text-lg font-[500] text-gray-500">
        İlanınızın temel bilgilerini giriniz
      </div>
      <Title />
      <Category />
      <Tags />
      <Description />
    </section>
  )
}
export default Content
