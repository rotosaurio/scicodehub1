import Image from 'next/image'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
 


export default function Home() {
  return (
    <main class=" bg-gray-900 text-white">
    <Header ></Header>
<Sidebar></Sidebar>

<div class="bg-gray-100 font-sans">

  <div class="min-h-screen flex items-center justify-center">
    
    <div class="max-w-md p-6 bg-indigo-300 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold mb-4">log in</h2>
      <form>
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
      <a href="/singup">if you want registrer push here</a>
       
    </div>

    
    </div>

</div>
<Footer></Footer>
</main>

  )}