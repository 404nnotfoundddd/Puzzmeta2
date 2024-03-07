import { Inter } from 'next/font/google'
import BtnBack from './components/BtnBack'
import BtnNext from './components/BtnNext'
import BtnSave from './components/BtnSave'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const BottomNav = () => {
  return (
    <nav
      className={`${inter.className} absolute bottom-0 flex w-full px-8 py-5`}
    >
      <BtnBack />
      <div className="absolute right-10 flex flex-row gap-2">
        <BtnNext />
        <BtnSave />
      </div>
    </nav>
  )
}
export default BottomNav
