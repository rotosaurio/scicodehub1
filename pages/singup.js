import Image from 'next/image'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'; 


export default function Home() {
 


    return (
        <main class=" bg-gray-900 text-white">
            <Header ></Header>
            <Sidebar></Sidebar>
      <div class="min-h-screen flex items-center justify-center Max-w-6xl">
      <div class="max-w-md p-6 ml-4 bg-indigo-400 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold mb-4">Sing  Up</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold">Name</label>
            <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg"></input>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold">email</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg"></input>
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700 font-semibold">password</label>
            <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg"></input>
          </div>
          <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-green-600">
        <a href="/">Registrarse</a>
      </button>   
               </form>
        <a href="/singin">if you want login push here</a>
      </div>
      </div>
        <Footer></Footer>
      </main>
    )}
  
  
  
   