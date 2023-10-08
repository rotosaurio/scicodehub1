import React from 'react';

const Footer = () => {
  return (
    
<footer class="site-footer bg-gradient-to-b from-gray-900 to-blue-900 text-gray-500 py-12 text-sm leading-6 w-full h-50 mt-auto">
        <div class="container mx-auto  ">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="col-span-2">
                    <h6 class="text-white text-lg uppercase tracking-wide font-semibold">About</h6>
                    <p class="text-justify">SciCodeHub.com <i>THE MAIN GOAL OF SciCodeHub IS TO CONNECT, 
                      CREATE AND ADVANCE.</i> both in open-source code and in the creation of scientific 
                      projects that can be free for everyone, with the aim of not restricting knowledge and 
                      advancing our technologies within our community.</p>
                </div>

                <div class="col-span-1">
                    <h6 class="text-white text-lg uppercase tracking-wide font-semibold">Categories</h6>
                    <ul class="footer-links">
                        <li><a class="text-gray-500 hover:text-blue-500" href="#">Scientific</a></li>
                        <li><a class="text-gray-500 hover:text-blue-500" href="#">Programming</a></li>
                        <li><a class="text-gray-500 hover:text-blue-500" href="#">Research</a></li>
                    </ul>
                </div>

                <div class="col-span-1">
                    <h6 class="text-white text-lg uppercase tracking-wide font-semibold">Quick Links</h6>
                    <ul class="footer-links">
                        <li><a class="text-gray-500 hover:text-blue-500" href="/">About Us</a></li>
                        <li><a class="text-gray-500 hover:text-blue-500" href="/">Contact Us</a></li>
                        <li><a class="text-gray-500 hover:text-blue-500" href="https://science.nasa.gov/researchers/open-science/">Nasa</a></li>
                        <li><a class="text-gray-500 hover:text-blue-500" href="/">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mx-auto mt-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div class="col-span-2 md:col-span-1 h-20">
                    <p class="copyright-text text-gray-500">Copyright &copy; 2023 All Rights Reserved by <a class="text-blue-500" href="#">SciCodeHub</a>.</p>
                </div>
                <div class="col-span-2 md:col-span-1 h-20">
                    <ul class="social-icons float-right">
                        <li><a class="w-10 h-10 leading-10 ml-2 mr-0 rounded-full bg-gray-800" href="#"><i class="fa fa-facebook text-white"></i></a></li>
                        <li><a class="w-10 h-10 leading-10 ml-2 mr-0 rounded-full bg-gray-800" href="#"><i class="fa fa-twitter text-white"></i></a></li>
                        <li><a class="w-10 h-10 leading-10 ml-2 mr-0 rounded-full bg-gray-800" href="#"><i class="fa fa-dribbble text-white"></i></a></li>
                        <li><a class="w-10 h-10 leading-10 ml-2 mr-0 rounded-full bg-gray-800" href="#"><i class="fa fa-linkedin text-white"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
      );
        };

    export default Footer;