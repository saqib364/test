import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import { useForm } from "react-hook-form";
import { useMutate } from "restful-react";
import { useRouter } from 'next/router';
export default function Login ({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const router = useRouter();
    const { mutate: login, loading, error } = useMutate({
      verb: 'POST',
      path: 'login'
    });
    const { register, handleSubmit } = useForm();
  
    const onSubmit = data => {
      login(data).then(_ => router.push('/'));
    }

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
       
        <div className="min-h-full flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
		<div className="max-w-md w-full space-y-8">
			<div className="text-center">
				<Image
				className="rounded-full self-center" 
				src="/img/logo.jpg"
				width={100}
				height={100}
				/>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-white">
					Sign in to your account
				</h2>
			</div>

			<div className="bg-gray-700 max-w-md rounded-md text-white overflow-hidden shadow-xl p-5">

				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<input type="hidden" name="remember" value="true"/>
					<div className="rounded-md shadow-sm -space-y-px">
						<div className="grid gap-6">
							<div className="col-span-12">
								<label htmlFor="email" className="text-white text-lg font-bold mt-4 dark:text-gray-50">Email</label>
								<input id="email-address" name="email" type="email" ref={register} autoComplete="email" required className="h-8 mt-1 bg-transparent border-b focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white  shadow-sm sm:text-sm border-gray-300"/>
							</div>

							<div className="col-span-12">
								<label htmlFor="password" className="text-white text-lg font-bold mt-4 dark:text-gray-50">password</label>
								<input id="password" name="password" type="password" ref={register} autoomplete="current-password" required className="h-8 mt-1 bg-transparent border-b focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white shadow-sm sm:text-sm border-gray-300 "/>
							</div>
						</div>
					</div>
          { error &&
          <div class="relative py-3 pl-4 pr-10 leading-normal text-center text-red-700 bg-red-100 rounded-lg" role="alert">
  <p>{error?.data}</p>
</div>
}

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-200 rounded-md"/>
							<label htmlFor="remember_me" className="text-white font-bold ml-1 dark:text-gray-50">
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<Link href="/reset-password">
              <a className="font-medium text-indigo-00 hover:text-indigo-800">
								Forgot your password?
							</a>
              </Link>
						</div>
					</div>


					<div>
						<button type="submit" disabled={loading} className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Sign in
						</button>
					</div>
				</form>
		</div>
    <div className="text-center">
        <p className="text-white">No Account?  <Link href="/signup"><a className="text-indigo-500 hover:text-indigo-700 font-bold">Signup</a></Link></p>
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
    );
};

