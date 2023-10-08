import Image from 'next/image'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'

export default function Home() {
  return (
<main class="bg-gray-900 text-white">
<Header></Header>
<Sidebar></Sidebar>
<div class="pl-10 border-t-4  border-black ">
<div class="max-w-6xl">
 <div class="  pb-40 text-center  text-white text-4xl">
IN DEVELOPMENT   </div>
  
    </div>  
</div>
<Footer></Footer>
</main>
  )
}