import Link from 'next/link'
import Image from 'next/image'
import React from 'react';

export default function Blogs({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
      <div>
        <nav className="relative flex flex-wrap items-center justify-between bg-black">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Image
         className="rounded-full min-w-full min-h-full"
         src="/img/logo.jpg"
         width="60"
         height="60"
         />
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow justify-center items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="lg:flex items-center text-center xs:block ">
         <li className="p-5 border-b-2 border-transparent hover:border-yellow-500 ">
             <Link href="/">
             <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
               Home
             </a>
             </Link>
           </li>
           <li className="p-5 border-b-2 border-transparent hover:border-yellow-500 ">
             <Link href="/about">
             <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
               About
             </a>
             </Link>
           </li>
           <li className="p-5 border-b-2 border-transparent hover:border-yellow-500 ">
             <Link href="/blogs">
             <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
               Blogs
             </a>
             </Link>
           </li>
           <li className="p-5 border-b-2 border-transparent hover:border-yellow-500 ">
             <Link href="/contact">
             <a className="text-white m-3 font-bold text-lg hover:text-yellow-500">
               Contact
             </a>
             </Link>
           </li>
           <li className="p-5 border-b-2 border-transparent hover:border-yellow-500 ">
             <Link href="/login">
             <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
               Login
             </a>
             </Link>
           </li>
           <li className="p-5 border-b-2 border-transparent hover:border-yellow-500 ">
             <Link href="/become-a-tester">
             <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
               Become A Tester
             </a>
             </Link>
           </li>
         </ul>
            </div>
          </div>
        </nav>
        </div>
        <div className="text-white bg-gray-800 body-font">
          <h1 className="pt-5 text-center text-white font-extrabold text-5xl">Blogs</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl text-gray-200 font-bold mb-3">Raclette Blueberry Nextious Level</h2>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link href="#">
          <a className="text-indigo-500 inline-flex items-center hover:text-yellow-500">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl text-gray-200 font-bold mb-3">Raclette Blueberry Nextious Level</h2>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link href="#">
          <a className="text-indigo-500 inline-flex items-center hover:text-yellow-500">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl text-gray-200 font-bold mb-3">Raclette Blueberry Nextious Level</h2>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link href="#">
          <a className="text-indigo-500 inline-flex items-center hover:text-yellow-500">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl text-gray-200 font-bold mb-3">Raclette Blueberry Nextious Level</h2>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link href="#">
          <a className="text-indigo-500 inline-flex items-center hover:text-yellow-500">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>      
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl text-gray-200 font-bold mb-3">Raclette Blueberry Nextious Level</h2>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="title-font sm:text-2xl text-xl text-gray-200 font-bold mb-3">Raclette Blueberry Nextious Level</h2>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        <footer className="text-gray-600 body-font bg-gray-700">

<div className="flex justify-center">

  <div className="p-10 text-white w-2/4 ">
  <div className="rounded-full h-25 w-25 mb-4 flex items-center">
   <Image
   className="rounded-full right-4 min-w-full min-h-full"
   src="/img/logo.jpg"
   width="50"
   height="50"
   />
   <h2 className="font-bold text-lg">About Us</h2>
 </div>
 <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
  </div>
<div className="flex justify-center items-center text-white w-2/4">

<ul>
<li>
<h2 className="text-lg font-bold mb-4">Other Links</h2>
</li>
<li className="hover:text-yellow-500">
  <Link href="/">
  <a>
    Privacy Policy
  </a>
  </Link>
</li>
<li className="hover:text-yellow-500">
  <Link href="/signup">
  <a>
    Signup
  </a>
  </Link>
</li>
</ul>
</div>

</div>

<div>
   <ul className="hidden md:flex justify-between item-center text-center bg-black bg-opacity-30">
   <li className="p-5 border-t-2 border-transparent md:hover:border-yellow-500 ">
       <Link href="/">
       <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
         Home
       </a>
       </Link>
     </li>
     <li className="p-5 border-t-2 border-transparent md:hover:border-yellow-500 ">
       <Link href="/">
       <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
         About
       </a>
       </Link>
     </li>
     <li className="p-5 border-t-2 border-transparent md:hover:border-yellow-500 ">
       <Link href="/">
       <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
         Blogs
       </a>
       </Link>
     </li>
     <li className="p-5 border-t-2 border-transparent md:hover:border-yellow-500 ">
       <Link href="/">
       <a className="text-white m-3 font-bold text-lg hover:text-yellow-500">
         Contact
       </a>
       </Link>
     </li>
     <li className="p-5 border-t-2 border-transparent md:hover:border-yellow-500 ">
       <Link href="/">
       <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
         Login
       </a>
       </Link>
     </li>
     <li className="p-5 border-t-2 border-transparent md:hover:border-yellow-500 ">
       <Link href="/">
       <a className="text-white  m-3 font-bold text-lg hover:text-yellow-500">
         Become A Tester
       </a>
       </Link>
     </li>
   </ul>
</div>
</footer>
      </>
    );
  }
  