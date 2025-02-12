'use cilent'
import Image from "next/image";

export default function Home () {
  return(
    <div className="flex flex-col h-screen sm:flex-row">
      <div className="bg-[#e5e7eb] flex-1 w-full sm:h-screen">
        <input className=" w-70` z-40 rounded-full m-5 p-5" placeholder="Search"/>
        <img src="Group2.png"/>
        <div className="flex flex-col ">
          <p>February 12, 2025</p>
         <div className="flex flex-nowrap">
         <h1 className="h-12 text-5xl font-extrabold text-gray-900">Ulaanbaatar</h1>
         <img src="localization_icon.png"/>
         </div>
        
        </div>
        <img src="icon.png"/>
        <div>
        <h1 className="font-extrabold text-[100px] -mt-10 ">-11</h1>
        <p className="font-extrabold mb-12 text-red-400 ">Sunny</p>
        <div className="flex flex-nowrap  gap-[48px]">
          <img src="Home.png"/>
          <img src="Pin.png"/>
          <img src="Heart.png"/>
          <img src="User.png"/>
        </div>
        </div>
      </div>
      <div className="bg-black flex-1 w-full sm:h-screen">
      <div className="flex flex-col ">
          <p>February 12, 2025</p>
         <div className="flex flex-nowrap">
         <h1 className="h-12 text-5xl font-extrabold text-gray-900">Ulaanbaatar</h1>
         <img src="localization_icon.png"/>
         </div>
        
        </div>
        <img src="iconsar.png"/>
        <div>
        <h1 className="font-extrabold text-[100px] -mt-10 ">-24.9</h1>
        <p className="font-extrabold mb-12 text-red-400 ">Sunny</p>
        <div className="flex flex-nowrap  gap-[48px]">
          <img src="Home.png"/>
          <img src="Pin.png"/>
          <img src="Heart.png"/>
          <img src="User.png"/>
        </div>
        </div>
      </div>
    </div>
  )
}
