import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiHome, FiUser, FiLogOut, FiUserPlus, FiBell, FiCast, FiGlobe, FiShield, FiMessageSquare } from 'react-icons/fi'

export default function Header({ page }) {

  const router = useRouter()
  const [dropdown, setDropdown] = React.useState(false)

  return (
    <div className="flex flex-row items-center justify-between w-full py-3 px-5 border-b border-lavender-black border-opacity-20">
      <div className="flex">
        <span className="font-bold">{ page }</span>
      </div>
      <div className="flex items-center space-x-5 text-lg">
        <Link href="/">
          <a className={`${ router.pathname === '/' ? 'text-lavender-light' : 'text-lavender-black' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light`}>
            <FiHome />
            <span className="font-light text-xs">Home</span>
          </a>
        </Link>
        <Link href="/news">
          <a className={`${ router.pathname === '/news' ? 'text-lavender-light' : 'text-lavender-black' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light`}>
            <FiGlobe />
            <span className="font-light text-xs">News</span>
          </a>
        </Link>
        <Link href="/">
          <a className={`${ router.pathname === '/chat' ? 'text-lavender-light' : 'text-lavender-black' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light`}>
            <FiMessageSquare />
            <span className="font-light text-xs">Chat</span>
          </a>
        </Link>
        <Link href="/">
          <a className={`${ router.pathname === '/myaccount' ? 'text-lavender-light' : 'text-lavender-black' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light`}>
            <FiUser />
            <span className="font-light text-xs">My Account</span>
          </a>
        </Link>
        <div className="relative">
          <button
            type="button"
            className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light"
            onClick={() => { setDropdown(true) }}
          >
            <FiShield />
            <span className="font-light text-xs">Administrator</span>
          </button>
          {setDropdown && (
            <React.Fragment>
              <button onClick={() => {setDropdown(false)}} type="button" className={`${dropdown ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
              <div className={`z-40 w-full ${dropdown ? 'fixed' : 'hidden'}`}>
                <div className="flex flex-col w-full max-w-[10rem] mt-2 rounded-md overflow-hidden bg-lavender-white border border-lavender-black border-opacity-20">
                  <div className="flex flex-row items-center w-full">
                    <Link href="/">
                      <a className="flex items-center w-full space-x-1 p-3 border-b border-lavender-black border-opacity-20 hover:bg-lavender-black hover:text-lavender-white">
                        <FiCast />
                        <span className="font-light text-xs">Monthly Reports</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center w-full">
                    <Link href="/">
                      <a className="flex items-center w-full space-x-1 p-3 border-b border-lavender-black border-opacity-20 hover:bg-lavender-black hover:text-lavender-white">
                        <FiBell />
                        <span className="font-light text-xs">Consultations</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center w-full">
                    <Link href="/">
                      <a className="flex items-center w-full space-x-1 p-3 hover:bg-lavender-black hover:text-lavender-white">
                        <FiUserPlus />
                        <span className="font-light text-xs">Add Account</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <Link href="/">
          <a className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light">
            <FiLogOut />
            <span className="font-light text-xs">Logout</span>
          </a>
        </Link>
      </div>
    </div>
  )
}