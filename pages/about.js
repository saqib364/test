import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function BeacomeATester({ fixed }) {
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
      <div className="bg-gray-800 text-white text-center min-h-screen">

      <div className="flex justify-center items-center p-12 text-6xl font-extrabold">
        <h1>About Us</h1>
      </div>
<div className="md:mx-48 mx-28 bg-gray-700 rounded p-10">
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
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
