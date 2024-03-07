import Box from './components/Box'

const Progressbar = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <Box level={1} />
      <Box level={2} />
      <Box level={3} />
      <Box level={4} />
      <Box level={5} />
    </div>
  )
}
export default Progressbar
