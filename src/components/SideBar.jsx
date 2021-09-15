import Moment from 'react-moment'
import { FiPlus } from 'react-icons/fi'

export default function SideBar() {
  return (
    <div className="flex flex-col w-full max-w-md h-full overflow-hidden border-l border-lavender-white border-opacity-20">
      <div className="flex flex-row items-center justify-between px-5 py-2.5 border-b border-lavender-white border-opacity-20">
        <span className="font-bold">Your Consultations</span>
        <button
          type="button"
          className="flex items-center px-3 py-[5px] space-x-1 border border-lavender-white border-opacity-20 transition ease-in-out duration-100 hover:scale-95"
        >
          <FiPlus />
          <span className="font-light text-xs">Create New</span>
        </button>
      </div>
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <div className="flex flex-row items-center w-full py-3 border-b border-lavender-white border-opacity-20 space-x-3 transition ease-in-out duration-300 hover:bg-lavender-dark hover:bg-opacity-10">
          <div className="flex flex-col w-full max-w-full px-3 py-2 space-y-2">
            <div className="flex flex-row items-center w-full space-x-2">
              <h1 className="font-bold text-lg">Jerome Villaruel <span className="font-light text-sm text-lavender-white text-opacity-50">PC 13</span></h1>
              <div className="flex items-center px-3 py-[2px] space-x-1 bg-lavender-light text-lavender-white border border-lavender-black border-opacity-20">
                <span className="font-light text-[10px]">Undone</span>
              </div>
            </div>
            <div className="flex w-full">
              <h1 className="font-light text-sm line-clamp-2">
                Naguba akong heart pwede ayuhon nimo, kanang dili na maguba ha.
              </h1>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <div className="flex flex-col space-y-1">
                <h1 className="font-normal text-xs text-lavender-white text-opacity-30">Resolution Made</h1>
                <span className="font-light text-xs line-clamp-1">Display here your actual resolution to the particular reported issues.</span>
              </div>
              <div className="flex flex-row items-center w-full space-x-2">
                <h6 className="font-light text-xs text-lavender-white text-opacity-80">
                  <span className="font-normal text-lavender-white text-opacity-30">Date Reported: </span><Moment date="08/10/21" format='LL' />
                </h6>
                <span className="font-bold text-xs text-lavender-white text-opacity-80">&bull;</span>
                <h6 className="font-light text-xs text-lavender-white text-opacity-80">
                  <span className="font-normal text-lavender-white text-opacity-30">Date Resolved: </span><Moment date="08/12/21" format='LL' />
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}