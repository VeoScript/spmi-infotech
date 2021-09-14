import Link from 'next/link'
import { FiUser } from 'react-icons/fi'

export default function LeftSideBar() {
  return (
    <div className="flex flex-col w-full max-w-xs h-full overflow-y-auto border-r border-lavender-black border-opacity-20">
      <div className="flex flex-col w-full px-5 py-3">
        <h1 className="font-bold text-xl text-lavender-light">Specialty Pulp Manufacturing, Inc.</h1>
        <h1 className="text-sm text-lavender-black">IT Consultation Program <span className="text-lavender-black text-opacity-40 text-xs">v.1.0</span></h1>
      </div>
      <div className="flex flex-col w-full px-3">
        <Link href="/">
          <a className="flex items-center px-5 py-3 rounded-md text-lavender-white space-x-1 transition ease-in-out duration-300 bg-lavender-black">
            <FiUser />
            <span className="font-light text-xs">My Account</span>
          </a>
        </Link>
      </div>
    </div>
  )
}