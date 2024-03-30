import { Link } from "react-router-dom/dist"
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_TOP_LINKS } from "../constant/Menu"

const Sidebar = () => {
  return (
    <div className="bg-primary w-60 p-3 flex flex-col text-white font-RobotoMedium">
      <div className="flex items-center justify-center gap-3">
        <img
          src="https://www.highlandscoffee.com.vn/vnt_upload/weblink/White_logo800.png"
          alt="logo"
          className="w-[100px]"
        />
        <div className="text-[16px]">
          <p className="">Highland</p>
          <p className="">Coffee</p>
        </div>
      </div>
      <div className="flex-1 mt-6">
        {DASHBOARD_SIDEBAR_TOP_LINKS.map((link) => (
          <Link key={link.key} to={link.path}>
            <div key={link.key} className="flex items-center gap-3 p-3 cursor-pointer">
              <div>{link.icon}</div>
              <div>{link.label}</div>
            </div>
          </Link>
        ))}
      </div>
      <hr className="opacity-40" />
      <div className="">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <Link key={link.key} to={link.path}>
            <div className="flex items-center gap-3 p-3 cursor-pointer">
              <div>{link.icon}</div>
              <div>{link.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
