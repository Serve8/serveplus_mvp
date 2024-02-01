import { Outlet } from "react-router-dom"
import SHeader from "./SHeader"
import SSideBar from "./SSideBar"

const SLayout = () => {
  return (
    <div>
        <SHeader />
        <SSideBar />
        <div className="md:w-[80vw] bg-black/10 relative top-[15vh] md:left-[20vw] h-screen md:py-4 bg-gray-400 overflow-hidden ">
          <Outlet />
        </div>
       

    </div>
  )
}

export default SLayout