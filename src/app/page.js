import Hero from '@/components/Hero'
import Sub_hero from '@/components/Sub_hero'
import Support from '@/components/Support'
import { DivideIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Hero/>
     <Sub_hero/>  
     <Support/>
    </div>
  )
}
