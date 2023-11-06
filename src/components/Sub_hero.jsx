import { roboto } from "@/app/layout"

export default function Sub_hero() {
  return (
    <div className='min-h-[80vh] bg-white flex  items-center justify-around px-10'>
        <div className='flex flex-col justify-around '>
            <p className='text-center font-bold text-xl pt-10'>Motive Of AI Collab</p>
            <div className={`${roboto.className} relative top-32 flex gap-3 flex-col z-[3] text-lg`}>
            <p> ➡️ Make AI accesible to all </p>
            <p> ➡️ Introduction to ollama AI model to iteract with AI in local host </p>
            <p> ➡️ Provide an AI personal assistant to all for interaction  </p>
            <p> ➡️ Familiarize with modern AI tools like ollama and their use cases  </p>
            </div>
            <div className='relative z-[2] opacity-75 bottom-10'><img src="/study.svg" className='h-80 ' alt="" /></div>
        </div>

    </div>
  )
}
