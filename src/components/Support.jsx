import { Github,Twitter,Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Support() {
  return (
    <div className='h-[70vh] grid items-end md:h-[50vh]'>
        <div className='pt-10'>
            <p className='text-blue-400 text-center text-xl font-bold'>Support Me</p>
            <p className='text-blue-200 text-center'>Give your feedback and sugesssions ❤️</p>
            
        </div>

        <div className='flex flex-col'>
            <p className='text-blue-400 font-bold text-center pt-10'>Social Media Handle</p>
                <div className='flex pt-7 justify-center gap-4'>
                 <Link href='https://github.com/MohdZaheen123' target='_blank'><Github size={35} color="#ffff" strokeWidth={0.9} /></Link>
                 <Link href='https://twitter.com/TheMatrixT8888' target='_blank'><Twitter size={35} color="#ffff" strokeWidth={0.9} /></Link>
                 <Link href='https://www.linkedin.com/in/mohamed-zaheen-a9a169256/' target='_blank'><Linkedin size={35} color="#ffff" strokeWidth={0.9} /></Link>
                </div>
        </div>
        
        <img src="/support.jpg" className='w-screen md:relative z-[-2] bottom-[40rem] md:h-[60rem] opacity-80' alt="" />
    </div>
  )
}
