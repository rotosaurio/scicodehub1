import Image from 'next/image'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'


export default function Home() {
  return (
<main>
    <Header></Header>
    <Sidebar></Sidebar>
<div class="bg-gray-100 font-sans">
<div class="container mx-auto mt-4 flex">
    <div class="w-1/4 bg-white p-4">
        <h2 class="text-lg font-semibold mb-4 bg-gray-900 text-white">contacts</h2>
        <ul>
            <li class="mb-2">
                <div class="flex items-center">
                    <a src="" alt="Nombre del contacto" class="w-8 h-8 rounded-full mr-2 bg-black"></a>
                    <p class="text-sm">juan castillo</p>
                </div>
            </li>
            <li class="mb-2">
                <div class="flex items-center">
                    <a src="" alt="Nombre del contacto" class="w-8 h-8 rounded-full mr-2 bg-black"></a>  
                    <p class="text-sm">armando sevilla</p>
                </div>
            </li>
            <li class="mb-2">
                <div class="flex items-center">
                    <a src="" alt="Nombre del contacto" class="w-8 h-8 rounded-full mr-2 bg-black"></a>
                    <p class="text-sm">emilio hernandez</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="w-2/4 bg-gray-200 p-4">
       <div >
        
        <h2 class="text-lg font-semibold mb-4">conveersacion at the contact</h2>
        
        </div>
        <div class="overflow-y-scroll h-64">
            <div class="flex mb-4">
                
                <a src="profile-image.jpg" alt="Nombre del contacto" class="w-8 h-8 rounded-full mr-2 bg-black"></a>
                <div class="bg-gray-900 p-2 rounded-lg">
                    
                    <p class="text-white text-sm">Hellow i want participe en your proyect</p>
                </div>
                
            </div>
            
        </div>
        <div class="flex">
            
            <input type="text" class="w-3/4 p-2 rounded-l-lg border outline-none" placeholder="Escribe tu mensaje..."></input>
            <button class="w-1/4 bg-gray-900 text-white p-2 rounded-r-lg">Send</button>
            
        </div>
        
    </div>
    
</div>

</div>
<div class="w-1/4 bg-white p-4">
            <h2 class="text-lg font-semibold mb-2">Idioma del chat</h2>
            <select class="w-full p-2 border rounded-lg">
                <option value="ingles">Inglés</option>
                <option value="espanol">Español</option>
                <option value="chino">Chino</option>
            </select>
        </div>
<Footer></Footer>
</main>

  )}