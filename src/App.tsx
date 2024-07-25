
import reactLogo from './assets/react.svg'

function App() {

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-900 gap-5">
      <img src={reactLogo} className="size-16 animate-spin" alt="React logo" />
      <p className='text-2xl text-zinc-200 font-semibold'>React Template</p>
    </div>
  )
}

export default App
