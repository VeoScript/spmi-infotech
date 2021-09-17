import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiUserPlus, FiUser, FiMonitor, FiCloud, FiShield } from 'react-icons/fi'

export default function CreateAccount({ setDropdown }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setDropdown(false)
    setIsOpen(true)
  }

  return (
    <>
      <button
        className="flex items-center w-full space-x-2 p-3 border-b border-nature-white border-opacity-20 hover:text-nature-white hover:text-opacity-50 outline-none"
        type="button"
        onClick={openModal}
      >
        <FiUserPlus />
        <span className="font-light text-xs">Create User Account</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-nature-white bg-opacity-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform text-nature-white bg-nature-black shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="font-bold text-base text-nature-white"
                >
                  Create User Account
                </Dialog.Title>
                <form className="flex flex-col w-full mt-2 space-y-2">
                  <div className="flex flex-row items-center w-full max-w-full p-2 space-x-2 text-sm text-nature-white bg-nature-black border border-nature-dim focus-within:border-nature-white focus-within:border-opacity-30">
                    <FiUser className="text-base text-nature-white text-opacity-50" />
                    <input type="text" placeholder="Name" className="w-full bg-transparent outline-none" />
                  </div>
                  <div className="flex flex-row items-center w-full max-w-full p-2 space-x-2 text-sm text-nature-white bg-nature-black border border-nature-dim focus-within:border-nature-white focus-within:border-opacity-30">
                    <FiMonitor className="text-base text-nature-white text-opacity-50" />
                    <input type="text" placeholder="Computer Name" className="w-full bg-transparent outline-none" />
                  </div>
                  <div className="flex flex-row items-center w-full max-w-full p-2 space-x-2 text-sm text-nature-white bg-nature-black border border-nature-dim focus-within:border-nature-white focus-within:border-opacity-30">
                    <FiCloud className="text-base text-nature-white text-opacity-50" />
                    <input type="text" placeholder="Department" className="w-full bg-transparent outline-none" />
                  </div>
                  <div className="flex flex-row items-center w-full max-w-full p-2 space-x-2 text-sm text-nature-white bg-nature-black border border-nature-dim focus-within:border-nature-white focus-within:border-opacity-30">
                    <FiShield className="text-base text-nature-white text-opacity-50" />
                    <input type="text" placeholder="Username" className="w-full bg-transparent outline-none" />
                  </div>
                  <div className="flex flex-row items-center justify-start w-full space-x-1 mt-4">
                    <button
                      type="submit"
                      className="w-full max-w-[8rem] py-2 text-sm text-center border border-nature-dim text-nature-white hover:border-nature-white hover:border-opacity-30 outline-none"
                    >
                      Create
                    </button>
                    <button
                      type="button"
                      className="w-full max-w-[8rem] py-2 text-sm text-center border border-nature-dim text-nature-white hover:border-nature-white hover:border-opacity-30 outline-none"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
