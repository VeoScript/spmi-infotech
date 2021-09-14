import { FiPlus } from 'react-icons/fi'

export default function RightSideBar() {
  return (
    <div className="flex flex-col w-full max-w-md h-full overflow-y-auto border-l border-lavender-black border-opacity-20">
      <div className="flex flex-row items-center justify-between px-5 py-2.5 border-b border-lavender-black border-opacity-20">
        <span className="font-bold">Your Consultations</span>
        <button
          type="button"
          className="flex items-center px-3 py-[5px] space-x-1 border border-lavender-black border-opacity-20 transition ease-in-out duration-100 hover:scale-95"
        >
          <FiPlus />
          <span className="font-light text-xs">Create New</span>
        </button>
      </div>
    </div>
  )
}