import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full py-3 px-5 border-b border-lavender-black border-opacity-20">
      <div className="flex">
        <span className="font-bold">Home</span>
      </div>
      <div className="flex items-center w-full max-w-xs">
        <div className="flex items-center w-full px-3 text-sm border-2 border-lavender-white focus-within:border-lavender-black focus-within:border-opacity-20 rounded-full bg-white">
          <FiSearch className="text-xl text-lavender-black text-opacity-50" />
          <input type="text" placeholder="Search" className="w-full px-3 py-2 bg-transparent outline-none" />
        </div>
      </div>
      {/* <div className="flex items-center space-x-3 text-lg">
        <Link href="/">
          <a className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light">
            <FiUser />
            <span className="font-light text-xs">My Account</span>
          </a>
        </Link>
        <Link href="/">
          <a className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light">
            <FiLogOut />
            <span className="font-light text-xs">Logout</span>
          </a>
        </Link>
      </div> */}
    </div>
  )
}