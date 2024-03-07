const Labels = () => {
  return (
    <div className="flex flex-row gap-2">
      <label
        className="cursor-pointer rounded-md bg-gradient-to-bl from-yellow-400 to-yellow-300 px-2 py-1 font-[500] text-[#0000006f] duration-300 hover:brightness-110"
        htmlFor="imgFiles"
      >
        Resim seçin
      </label>
      <label
        className="cursor-pointer rounded-md bg-gradient-to-bl from-pink-500 to-pink-400 px-2 py-1 font-[500] text-[#0000006f] duration-300 hover:brightness-110"
        htmlFor="videoFiles"
      >
        Video seçin
      </label>
    </div>
  )
}
export default Labels
