import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FiInfo } from 'react-icons/fi'

export default function About() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        className="flex items-center space-x-1 transition ease-in-out duration-300 hover:text-nature-white hover:text-opacity-50 outline-none"
        type="button"
        onClick={openModal}
      >
        <FiInfo />
        <span className="font-light text-xs">About</span>
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
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform text-nature-white bg-nature-black shadow-xl rounded-md">
                <div className="flex flex-col w-full mt-2 space-y-2">
                  <div className="flex flex-col w-full space-y-1">
                    <h1 className="font-bold text-base text-nature-white">System</h1>
                    <p className="font-light text-sm text-nature-white text-opacity-80">
                      This system is intended for SPMI - Information & Communications Technology Department for the IT Consultation System.
                      All of this features are originally inspired by my own conceptions. ITCS is an open source project here is the <Link href="https://github.com/VeoScript/spmi-infotech"><a className="text-blue-400 hover:underline" target="_blank">source code</a></Link>,
                      anyone can clone or update this project if they want.
                      This system was built in React JS powered by NextJS and Prisma with PostgreSQL.
                    </p>
                  </div>
                  <div className="flex flex-col w-full space-y-1">
                    <h1 className="font-bold text-base text-nature-white">Main Feature</h1>
                    <p className="font-light text-sm text-nature-white text-opacity-80">
                      Generate monthly reports, realtime daily news and manage users consultations.
                      ITCS managed all of computers that registered inside the SPMI Plant.
                    </p>
                  </div>
                  <div className="flex flex-col w-full space-y-1">
                    <h1 className="font-bold text-base text-nature-white">Developer</h1>
                    <p className="font-light text-sm text-nature-white text-opacity-80">
                      Proudly created with 💕 by Jerome Villaruel (VEOSCRIPT). © ITCS 2021.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full max-w-[8rem] py-2 text-sm text-center border border-nature-dim hover:border-nature-white hover:border-opacity-30 outline-none"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
