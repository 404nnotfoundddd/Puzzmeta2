import MainCategoryDropdown from './components/MainCategoryDropdown'
import SubCategoryDropdown from './components/SubCategoryDropdown'
import GigMetadata from './components/GigMetadata'

const Category = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="z-20 flex flex-row gap-2">
        <MainCategoryDropdown />
        <SubCategoryDropdown />
      </div>
      <GigMetadata />
    </div>
  )
}
export default Category
