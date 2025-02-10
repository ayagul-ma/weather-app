'use cilent'
import Image from "next/image";

export default function Home () {
  return(
    <div className="flex bg-100 justify-center"> 
      <div className="h-screen w-1/2 bg-[#e5e7eb]">
      <input className="bg-white w-[500px] h-[75px]  p-5   m-3 ronded-xl
      placeholder:font-semibold" placeholder="search"/>
    </div>
    <div className="h-screen w-1/2 bg-[#0F141E;]"></div>
    </div>
    
  )
}
