import Image from 'next/image'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import SearchBar from '@/components/searchbar'

export default function Home() {
  return (
<main class="bg-gray-900 text-white">
<Header></Header>
<Sidebar></Sidebar>
<div class="pl-10 border-t-4  border-black ">
<div class="max-w-6xl">
<SearchBar></SearchBar>
</div>
<div class=" text-white text-4xl">
John Smith</div>
<div class=" text-white text-xl pb-10">
Software Developer
</div>
<div class=" text-white text-4xl">
Emily Johnson
</div>
<div class=" text-white text-xl pb-10">
Web Programmer
</div>

<div class=" text-white text-4xl">
David Williams
</div>
<div class=" text-white text-xl pb-10">
Artificial Intelligence Researcher
</div>

<div class=" text-white text-4xl">
Laura Davis
</div>
<div class=" text-white text-xl pb-10">
Data Scientist
</div>

<div class=" text-white text-4xl">
Alex Turner
</div>
<div class=" text-white text-xl pb-10">
Graphic Designer
</div>

<div class=" text-white text-4xl">
Sophia Martinez
</div>
<div class=" text-white text-xl pb-10">
Mobile App Developer
</div>

<div class=" text-white text-4xl">
Daniel White
</div>
<div class=" text-white text-xl pb-10">
Game Programmer
</div>

<div class=" text-white text-4xl">
Olivia Brown
</div>
<div class=" text-white text-xl pb-10">
Molecular Biology Researcher
</div>

<div class=" text-white text-4xl">
Lucas Adams
</div>
<div class=" text-white text-xl pb-10">
User Experience (UX) Designer
</div>

<div class=" text-white text-4xl">
Isabella Taylor
</div>
<div class=" text-white text-xl pb-10">
Astronomy Research Scientist
</div>

</div>
<Footer></Footer>
</main>
  )
}
