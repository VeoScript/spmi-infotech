import React from 'react'
import Link from 'next/link'
import { FiHome, FiUser, FiLogOut, FiUserPlus, FiBell, FiCast, FiSettings } from 'react-icons/fi'

export default function Header() {

  const [dropdown, setDropdown] = React.useState(false)

  return (
    <div className="flex flex-row items-center justify-between w-full py-3 px-5 border-b border-lavender-black border-opacity-20">
      <div className="flex">
        <span className="font-bold">Home</span>
      </div>
      {/* <div className="flex items-center w-full max-w-xs">
        <div className="flex items-center w-full px-3 text-sm border-2 border-lavender-white focus-within:border-lavender-black focus-within:border-opacity-20 rounded-full bg-white">
          <FiSearch className="text-xl text-lavender-black text-opacity-50" />
          <input type="text" placeholder="Search" className="w-full px-3 py-2 bg-transparent outline-none" />
        </div>
      </div> */}
      <div className="flex items-center space-x-5 text-lg">
        <Link href="/">
          <a className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light">
            <FiHome />
            <span className="font-light text-xs">Home</span>
          </a>
        </Link>
        <Link href="/">
          <a className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-lavender-light">
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
            <FiSettings />
            <span className="font-light text-xs">Administrator</span>
          </button>
          {setDropdown && (
            <React.Fragment>
              <button onClick={() => {setDropdown(false)}} type="button" className={`${dropdown ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
              <div className={`z-40 w-full ${dropdown ? 'fixed' : 'hidden'}`}>
                <div className="flex flex-col w-full max-w-[10rem] mt-2 rounded-md overflow-hidden bg-lavender-black bg-opacity-10 border border-lavender-black border-opacity-20">
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