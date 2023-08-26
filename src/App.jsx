import Random from "./components/Random"
import Tag from "./components/Tag"


export default function App() {
  return (
  <div className="flex flex-col background relative items-center w-full h-screen overflow-x-hidden">
    <h1 className="bg-red-500 cursor-pointer hover:bg-red-900 hover:text-white hover:transition hover:duration-300 w-11/12 text-center rounded-lg mt-[30px] py-2 text-lg text-black font-bold uppercase">Random GIF</h1>
    <div className="flex flex-col w-full items-center gap-y-2 mt-[15px]">
      <Random />
      <Tag />
    </div>
  </div>
  )
}
