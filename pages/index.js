import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';


export default function Home({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
<>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
     <div className="bg-hero bg-no-repeat bg-cover min-h-screen min-w-full">
     <div className="lg:hidden">
     <nav className="relative flex flex-wrap items-center justify-between bg-black b-5">
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
        <div className=" hidden lg:block">
       <div className=" ml-12 mr-12 flex justify-between items-center">
       <div > 
       <p className="ml-2 pt-6 text-white text-lg font-semibold"> Welocome to <Link href="/">
         <a className="text-white text-3xl ml-2 font-extrabold border-b-2 hover:text-yellow-500 hover:border-yellow-500">
           Games Arena
         </a>
           </Link></p>
           </div>
         <div className="pt-6">
         <button className="bg-transparent px-4 py-2 font-semibold hover:text-yellow-500 text-white inline-flex items-center space-x-2 rounded">
        <svg className="w-8 h-8 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    </button>  
    
    <button className="bg-transparent px-4 py-2 font-semibold hover:text-yellow-500 text-white inline-flex items-center space-x-2 rounded">
        <svg className="w-8 h-8 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    </button>
    <button className="bg-transparent px-4 py-2 font-semibold hover:text-yellow-500 text-white inline-flex items-center space-x-2 rounded">
        <svg className="w-8 h-8 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
    </button>
    <button className="bg-transparent px-4 py-2 font-semibold hover:text-yellow-500 text-white inline-flex items-center space-x-2 rounded">
        <svg className="w-8 h-8 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest icon</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
    </button>
    </div>
           </div>
       <header className="flex items-center justify-center my-10 md:my-6">
       <div className="rounded-full h-25 w-25 z-10 right-2 flex items-center justify-center...">
         <Image
         className="rounded-full min-w-full min-h-full"
         src="/img/logo.jpg"
         width="120"
         height="120"
         />
       </div>
         <ul className="flex item-center bg-black bg-opacity-30">
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
             <Link href="/conatct">
             <a className="text-white m-3 font-bold text-lg hover:text-yellow-500">
               Contact
             </a>
             </Link>
           </li>



           </ul>
           <ul className="flex item-center bg-black bg-opacity-50 rounded-r-full pr-8">
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
       </header>
       </div>
       <div className="ml-10 mr-10 mt-10 md:mt-20" >
         <p className= "md:w-2/4 text-white text-center bg-blue-700 bg-oppacity-60 rounded p-2 text-4xl font-bold rounded ">Latest Games Testing Area</p>
         <h1 className="md:w-2/4 text-center md:text-left text-white text-6xl font-extrabold mt-5">Play And Check Latest Games Or List Your Games</h1>
         <p className="md:w-2/4 text-center md:text-left text-gray-200 text-2xl font-bold rounded mt-5 pb-4">People Play Games And Give Reviews</p>
       </div>
     </div>



     <div className="bg-gray-700 pt-10 pb-10">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span className="block text-white">Want To Become A Game Tester?</span>
      <span className="block text-indigo-600">Register Here And Enjoy Testing Amazing Games.</span>
    </h2>
    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div className="inline-flex rounded-md shadow">
        <Link href="/signup"><a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base rounded-md font-bold text-white bg-indigo-600 hover:bg-yellow-500">
          Register
        </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<div className="py-12 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className=" text-indigo-600 font-semibold text-lg tracking-wide uppercase">For Game developer</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        list your game on our website for tester.
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
People will test your games. Share their thoughts and give reviews and comments their thoughts about the game on playstore.       </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6 text-white text-lg rounded"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>
            </div>


            <p className="ml-16 text-lg leading-6 font-medium text-white">Real People</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-white">Revies On PlayStore</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.

          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-white">People Comments On Playstore</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>

        <div className="relative">
          <dt>
            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg className="h-6 w-6 text-white rounded"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" /></svg>
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-white">Helps To Find Bugs</p>
          </dt>
          <dd className="mt-2 ml-16 text-base text-gray-200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>




      <div className="text-white bg-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-indigo-500 mb-4">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                  Will we get paid when we test Games?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                 How to list Our Games on website?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                  Will you provide reviews on playstore?
                </summary>

                <span>
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                  What is the cost of listing Games?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                  Do you Have Pakages of Games listing?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-800 rounded-md py-2 px-4">
                  From where people download our games?
                </summary>

                <span className="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
    </div>


    <div className="min-h-full flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
		<div className="max-w-md w-full space-y-8">
			<div className="text-center">

				<h2 className="mt-6 text-center text-3xl font-extrabold text-white">
				Get In touch
				</h2>
			</div>

			<div className="bg-gray-700 max-w-md rounded-md text-white overflow-hidden shadow-xl p-5">

            <form className="rounded-lg flex flex-col px-8 py-8 dark:bg-blue-500">

      <label htmlFor="fullname" className="text-white text-lg font-bold mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500  font-light text-white" />

      <label htmlFor="email" className="text-white text-lg font-bold mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500  font-light text-white" />

      <label htmlFor="subject" className="text-white text-lg font-bold mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500  font-light text-white" />

      <label htmlFor="message" className="text-white text-lg font-bold mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500  font-light text-white"></textarea>
      <div className="flex flex-row items-center justify-start">
      <button type="submit" className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Send Message
						</button>
      </div>
    </form>
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
          Links 1
        </a>
        </Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link href="/">
        <a>
          Links2
        </a>
        </Link>
      </li>
      <li className="hover:text-yellow-500">
        <Link href="/">
        <a>
          Links 3
        </a>
        </Link>
      </li>
      <li>
        <Link href="/">
        <a className="hover:text-yellow-500">
          Links 4
        </a>
        </Link>
      </li>
    </ul>
  </div>

      </div>

<div>
         <ul className="sm:hidden md:flex justify-between item-center text-center bg-black bg-opacity-30">
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

  )
}
