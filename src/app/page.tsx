import Nav from './_components/Nav'
import Progressbar from './_components/Progressbar'
import Main from './_components/Main'
import BottomNav from './_components/BottomNav'

const Home = async () => {
  return (
    <div className="flex h-full w-full flex-col items-center overflow-x-hidden overflow-y-scroll bg-white pb-24">
      <Nav />
      <Progressbar />
      <Main />
      <BottomNav />
    </div>
  )
}

export default Home
