import { Outlet } from "react-router-dom/dist"
import Sidebar from "./Sidebar"

const Layout = () => {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div>
        <div className="bg-sky-200">header</div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
