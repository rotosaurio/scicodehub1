import Image from 'next/image'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import SearchBar from '@/components/searchbar'
 export default function Home() {
    return ( 
        <main class="bg-gray-900 text-white">
        <Header></Header>
        
        <div class="pl-10 border-t-4  border-black ">
            
<div class="max-w-6xl">
 <div class=" text-center  text-white text-4xl">
 <SearchBar></SearchBar>
Resultados
 </div>

 <div class="  text-center text-white text-xl pb-10">   
 Open Source Science Initiative
 <div class="  text-center text-white text-lg pb-10">
 NASA is making a long-term commitment to building an inclusive open science community over the next decade. Open-source science is a commitment to the open sharing of software, data, and knowledge (algorithms, papers, documents, ancillary information) as early as possible in the scientific process.
 <a href='https://science.nasa.gov/researchers/open-science/'><img
          src="/nasa1.jpeg" // Reemplaza con la ruta de tu imagen de inicio
          alt="nasa1"
          className="h-100 w-100"
        />
        </a>
    </div>
  </div>
  <div class="  text-center text-white text-xl pb-10">   
  Citizen Science
 <div class="  text-center text-white text-lg pb-10">
 NASAs citizen science projects are collaborations between scientists and interested members of the public. Through these collaborations, volunteers (known as citizen scientists) have helped make thousands of important scientific discoveries. More than 410 NASA citizen scientists have been named as co-authors on refereed scientific publications. Want to work on some real NASA science? Click on one of the 40 projects below to get started. NASA citizen science projects are open to everyone around the world, not limited to U.S. citizens or residents. <a href='https://science.nasa.gov/researchers/open-science/'><img
          src="/nasa3.jpeg" // Reemplaza con la ruta de tu imagen de inicio
          alt="nasa3"
          className="h-100 w-100"
        />
        </a>
    </div>
  </div>
  <div class="  text-center text-white text-xl pb-10">   
  Open Source Science Opportunities
 <div class="  text-center text-white text-lg pb-10">
 The NASA Open Science Data Repository consists of two integrated biological databases—Ames Life Sciences Data Archive (ALSDA) and GeneLab—into one centralized data system. The Ames Life Sciences Data Archive (ALSDA) is the official repository of non-human science data spanning a broad range of biological levels involving data from tissues, organs, whole organisms, physiology, and behavior.  <a href='https://www.nasa.gov/missions/station/open-source-science-opportunities/'><img
          src="/nasa2.jpeg" // Reemplaza con la ruta de tu imagen de inicio
          alt="nasa1"
          className="h-100 w-100"
        />
        </a>
    </div>
  </div>
 </div>
 </div>
        <Sidebar></Sidebar>
        <Footer ></Footer>
        </main>
        )
    }