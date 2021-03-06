import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiHome, FiUser, FiLogOut, FiBell, FiCast, FiGlobe, FiShield, FiMessageSquare, FiUsers } from 'react-icons/fi'
import About from './Modals/About'
import CreateAccount from './Modals/CreateAccount'

export default function Header({ page }) {

  const router = useRouter()
  const [dropdown, setDropdown] = React.useState(false)

  return (
    <div className="flex flex-row items-center justify-between w-full py-3 px-5 border-b border-nature-white border-opacity-20">
      <div className="flex">
        <span className="font-bold text-nature-white">ITCS | { page }</span>
      </div>
      <div className="flex items-center space-x-5 text-lg">
        <Link href="/">
          <a className={`${ router.pathname === '/' ? 'text-[#FF9800]' : 'text-nature-white' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50`}>
            <FiHome />
            <span className="font-light text-xs">Home</span>
          </a>
        </Link>
        <Link href="/news">
          <a className={`${ router.pathname === '/news' ? 'text-[#FF9800]' : 'text-nature-white' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50`}>
            <FiGlobe />
            <span className="font-light text-xs">News</span>
          </a>
        </Link>
        <Link href="/">
          <a className={`${ router.pathname === '/chat' ? 'text-[#FF9800]' : 'text-nature-white' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50`}>
            <FiMessageSquare />
            <span className="font-light text-xs">Chat</span>
          </a>
        </Link>
        <Link href="/">
          <a className={`${ router.pathname === '/myaccount' ? 'text-[#FF9800]' : 'text-nature-white' } flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50`}>
            <FiUser />
            <span className="font-light text-xs">My Account</span>
          </a>
        </Link>
        <div className="relative">
          <button
            type="button"
            className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50 outline-none"
            onClick={() => { setDropdown(true) }}
          >
            <FiShield />
            <span className="font-light text-xs">Administrator</span>
          </button>
          {setDropdown && (
            <React.Fragment>
              <button onClick={() => {setDropdown(false)}} type="button" className={`${dropdown ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
              <div className={`z-40 w-full ${dropdown ? 'fixed' : 'hidden'}`}>
                <div className="flex flex-col w-full max-w-[10rem] mt-2 rounded-md overflow-hidden bg-nature-black border border-nature-white border-opacity-20">
                  <div className="flex flex-row items-center w-full">
                    <Link href="/">
                      <a className="flex items-center w-full space-x-2 p-3 border-b border-nature-white border-opacity-20 hover:bg-nature-light hover:text-nature-white hover:text-opacity-50">
                        <FiCast />
                        <span className="font-light text-xs">Monthly Reports</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center w-full">
                    <Link href="/">
                      <a className="flex items-center w-full space-x-2 p-3 border-b border-nature-white border-opacity-20 hover:bg-nature-light hover:text-nature-white hover:text-opacity-50">
                        <FiBell />
                        <span className="font-light text-xs">Consultations</span>
                      </a>
                    </Link>
                  </div>
                  <div className="flex flex-row items-center w-full">
                    <CreateAccount setDropdown={setDropdown} />
                  </div>
                  <div className="flex flex-row items-center w-full">
                    <Link href="/">
                      <a className="flex items-center w-full space-x-2 p-3 hover:bg-nature-light hover:text-nature-white hover:text-opacity-50">
                        <FiUsers  />
                        <span className="font-light text-xs">Accounts Registered</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
        <About />
        <Link href="/">
          <a className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50">
            <FiLogOut />
            <span className="font-light text-xs">Logout</span>
          </a>
        </Link>
      </div>
    </div>
  )
}