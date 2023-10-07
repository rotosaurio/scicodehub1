import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<main  class="bg-black h-screen flex flex-col justify-start items-start">
<h1 class="text-3xl text-green-400 mt-4 ml-4">SciCodeHub</h1>
</main>
  )
}
