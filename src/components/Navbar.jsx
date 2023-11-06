import { Brain,Laptop2,Terminal  } from 'lucide-react';
import { roboto } from '@/app/layout';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className='py-8 flex justify-between  px-7 max-w-4xl mx-auto'>
    <Link href='/' className='text-white flex items-center'><Brain size={30} color="#ffffff" strokeWidth={0.75}/ ><p className={`${roboto.className} px-2 `}>AI <span className='text-blue-400'>Collab</span></p></Link>
    <div className='flex gap-4'>
    <Link href='/about'><Laptop2 color="#ffffff" size={30} strokeWidth={0.95} /></Link>
    <Link href='/docs'><Terminal color="#ffffff" size={30} strokeWidth={0.95} /></Link>
    
    </div>
    </nav>
  )
}


