import { roboto, sofia } from "@/app/layout"
import Image from "next/image"

export default function Hero() {
  return (
    <>
    <div className=' flex h-screen'>
        <img src="/home.jpg" className='absolute top-32 opacity-70 z-[-10] md:hidden' alt="" />
        <img src="/hero.jpg" className='absolute top-10 opacity-60 z-[-10] hidden md:block w-screen' alt="" />
        <div className=' text-white self-center w-screen'>
        <h1 className={`${roboto.className}  text-center text-5xl`}>AI <span className="text-blue-400">Collab</span></h1>
        <p className={`${roboto.className} text-center`}>Think | Collab | Design</p>
        <p className={`${sofia.className} pb-32 text-lg text-center pt-6 line-clamp-1 antialiased text-blue-200 leading-6`}>Welcome to AI Collab. where imagination meets creativity. Jump into the world of AI with your personalized AI assistant at you finger tip. Access LLM in localhost !!</p>
        </div>
    </div>
    </>
  )
}
