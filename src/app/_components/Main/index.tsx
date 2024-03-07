import { Inter } from 'next/font/google'
import Content from './components/Content'
import MediaContent from './components/MediaContent'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const Main = () => {
  return (
    <main className={`${inter.className} flex grow flex-row gap-6`}>
      <Content />
      <MediaContent />
    </main>
  )
}
export default Main
