import Logo from '@/png/logo.png'
import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300'],
})

const Nav = () => {
  return (
    <div
      className={`${robotoCondensed.className} relative flex w-full flex-row items-center justify-between px-4 py-2 shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)]`}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={Logo}
          alt="logo"
          width={130}
          height={100}
          sizes="(min-width: 380px) 130px, calc(33.33vw + 10px)"
        />
        <div className="flex h-[2rem] w-[0.1rem] bg-gray-400"></div>
        <div className="text-center text-[1.1rem] text-gray-500">
          Freelancer Ol
        </div>
      </div>
      <div className="absolute flex h-full w-full items-center justify-center">
        <div className="text-[1.2rem] text-gray-500">Adım 2/5</div>
      </div>
      <button className="text-[1.2] text-blue-500">Cıkış yap</button>
    </div>
  )
}
export default Nav
