import { useState } from 'react';
import { useMutate } from "restful-react";
import Image from 'next/image'
export default function ResetPassword  () {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState();
  const { mutate: resetPassword, loading, error } = useMutate({
    verb: 'POST',
    path: 'reset-password'
  });

  const onSubmit = e => {
    e.preventDefault();
    setSuccess();
    email && resetPassword({email}).then(_ => setSuccess('Check your email in order to reset password!'));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
        <div className="text-center">
            <Image
            className="rounded-full self-center" 
            src="/img/logo.jpg"
            width={100}
            height={100}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Enter Your Email
            </h2>
        </div>

        <div className="bg-gray-700 max-w-md rounded-md text-white overflow-hidden shadow-xl p-5">

            <form className="space-y-4" onSubmit={onSubmit}>
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div className="">
                    <div className="col-span-12">
								<label htmlFor="email" className="text-white text-lg font-bold mt-4 dark:text-gray-50">Your Email</label>
								<input id="email-address" name="email" type="email" onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="h-8 mt-1 bg-transparent border-b focus:ring-indigo-500 focus:border-indigo-500 block w-full text-white  shadow-sm sm:text-sm border-gray-300"/>
							</div>
                    </div>
                </div>
      { error &&
      <div class="relative py-3 pl-4 pr-10 leading-normal text-center text-red-700 bg-red-100 rounded-lg" role="alert">
<p>{error?.data}</p>
</div>
}

{ success &&
      <div class="relative py-3 pl-4 pr-10 leading-normal text-center text-green-500 bg-green-100 rounded-lg" role="alert">
      <p>{success}</p>
      </div>
            }

                <div>
                    <button type="submit" disabled={loading} className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
    </div>
</div>
</div>
  )
}