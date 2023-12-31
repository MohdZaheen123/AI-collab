import { Inter,Roboto,Sofia } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
export const roboto=Roboto({
  subsets:['latin'],
  weight:['500']
})
export const sofia = Sofia({
  subsets:['latin'],
  weight:'400'
})

export const metadata = {
  title: 'AI Collab',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className='max-w-[100rem]'>
      <Navbar/>
        {children}
      </div>
        </body>
    </html>
  )
}
