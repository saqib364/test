import Link from 'next/link';

const UserActivation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
      <div>
        <h2 className="text-green-500 text-3xl">
        You have been succesfuly activated. You can login now 😊
      </h2>
      <div className="text-center mt-5">
        <Link href="/login">
          <a className="bg-blue-600 text-lg rounded hover:bg-yellow-500 mt-5 px-4 py-3">
            Login
          </a>
        </Link>
        </div>
        </div>
    </div>
  )
}

export default UserActivation;