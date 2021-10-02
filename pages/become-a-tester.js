import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function BeacomeATester({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <div className="bg-hero2 bg-no-repeat bg-cover min-h-3/4 min-w-full">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
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
       <div className="ml-10 mr-10 mt-10 md:mt-20" >
         <p className= "md:w-2/4 text-white text-center bg-blue-700 bg-oppacity-60 rounded p-2 text-4xl font-bold rounded ">Join Our Testing Community</p>
         <h1 className="md:w-2/4 text-center md:text-left text-white text-4xl font-bold mt-5">Become A Tester, Test The Latest Games, Find Bugs Share You Review and Get Paid.</h1>
         <div className="md:w-2/4 pt-4 pb-12 text-center">
         <Link href="/signup"><a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base rounded-md font-bold text-white bg-indigo-600 hover:bg-yellow-500">
          Register
        </a>
        </Link>
        </div>
       </div>
     </div>



     

     <div className="bg-gray-800 text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-700 mb-5 flex-shrink-0">
        <svg className="h-12 w-12 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Work From Home</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-700 mb-5 flex-shrink-0">
        <svg className="h-12 w-12 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Earn good Money</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-700 text-white font-bold mb-5 flex-shrink-0">
        <svg className="h-12 w-12 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="2" y="6" width="20" height="12" rx="2" />  <path d="M6 12h4m-2 -2v4" />  <line x1="15" y1="11" x2="15" y2="11.01" />  <line x1="18" y1="13" x2="18" y2="13.01" /></svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Test The Latest Games</h2>
          <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
        </div>
      </div>
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


    <div className="bg-gray-800 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-600">Pitchfork Kickstarter Taxidermy</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-100">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
    <div className="flex flex-wrap -m-4">
    <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-gray-600 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-white text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-gray-600 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-white text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-gray-600 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-white text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-gray-600 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-white text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-gray-600 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-white text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className=" bg-gray-600 p-6 rounded-lg">
          <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
          <p className="leading-relaxed text-white text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
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
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s
            </p>
          </div>
          <div className="flex justify-center items-center text-white w-2/4">
            <ul>
              <li>
                <h2 className="text-lg font-bold mb-4">Other Links</h2>
              </li>
              <li className="hover:text-yellow-500">
                <Link href="/">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li className="hover:text-yellow-500">
                <Link href="/signup">
                  <a>Signup</a>
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
