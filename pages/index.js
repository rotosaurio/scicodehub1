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
 <div class=" text-center  text-white text-4xl">
 About us
  </div>
  <div class="  text-center text-white text-xl pb-10">
  We are a versatile social networking platform designed to connect individuals from various backgrounds, each driven by a unique project or concept, be it in the stages of development or simply at the ideation phase. Our platform caters to a diverse spectrum of interests, with a particular emphasis on the scientific domain, programming, research, and a wide array of project categories.

Our mission is to provide a collaborative and inclusive space where like-minded individuals and innovators can converge,

  </div>
  <div class="  text-center text-white text-xl">
  share ideas, seek collaboration opportunities, and harness collective expertise to transform their visions into reality. Whether you're a scientist exploring groundbreaking discoveries, a programmer crafting cutting-edge software solutions, a researcher delving into new knowledge frontiers, or someone with a creative project in mind, our network welcomes you with open arms. At our core, we aim to foster creativity, innovation, and knowledge exchange. We believe that by connecting individuals with diverse skill sets and backgrounds, we can facilitate the exchange of ideas and the birth of new, exciting projects that have the potential to shape the future. Join us on this journey of exploration, collaboration, and realization as we work together to bring your projects and ideas to life.
    </div>  
    </div>  
</div>
<Footer></Footer>
</main>
  )
}
