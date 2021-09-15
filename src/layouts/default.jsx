import SideBar from '~/components/SideBar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-row w-full h-screen overflow-hidden bg-lavender-black text-lavender-white cursor-default">
      <div className="flex w-full h-full">
        { children }
      </div>
      <SideBar />
    </div>
  )
}