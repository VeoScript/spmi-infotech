import Moment from 'react-moment'

export default function DailyConsultations() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center w-full px-2 py-2">
        <h1 className="font-bold text-xl">Daily Consultations</h1>
      </div>
      <div className="flex flex-col w-full h-full px-2 py-2 space-y-2">
        <div className="flex flex-row items-center w-full h-full border border-lavender-black border-opacity-20 space-x-3">
          <div className="flex flex-col w-full max-w-full px-3 py-2 space-y-2">
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-xl">Requesting Person</h1>
            </div>
            <div className="flex w-full">
              <h1 className="font-light text-sm line-clamp-2">
                Reported Issue Your Content Here...
              </h1>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="font-bold text-sm">Resolution Made</h1>
              <div className="flex flex-row items-center w-full space-x-2">
                <h6 className="font-light text-xs text-lavender-black text-opacity-80">
                  <span className="font-normal text-lavender-black">Date Reported: </span><Moment date="08/10/21" format='LL' />
                </h6>
                <span className="font-bold text-xs text-lavender-black text-opacity-80">&bull;</span>
                <h6 className="font-light text-xs text-lavender-black text-opacity-80">
                  <span className="font-normal text-lavender-black">Date Resolved: </span><Moment date="08/12/21" format='LL' />
                </h6>
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex items-center px-3 py-[5px] space-x-1 bg-lavender-light text-lavender-white border border-lavender-black border-opacity-20">
                <span className="font-light text-xs">Undone</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}