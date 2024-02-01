import { Link } from "react-router-dom"
import { FaHome, FaClipboard, FaBullseye, FaUser, FaSlidersH, FaQuestionCircle, FaSun  } from "react-icons/fa";

const SSideBar = () => {
  return (
    <section>
        <div className="hidden md:block w-[20vw] h-screen bg-black/10 fixed top-[15vh]">
         <div className="flex flex-col gap-y-10 h-full overflow-hidden bg-gray-200 pl-4">

                <nav className="flex flex-col gap-4 mt-4 items-start">
                <ul className="flex flex-col gap-y-5">
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/seller-home' className="flex items-center gap-x-2"><FaHome/> <p>Home</p></Link></li>
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/seller-home/product'  className="flex items-center gap-x-2"> <FaQuestionCircle /> Products</Link></li>
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/Shome'  className="flex items-center gap-x-2"> <FaClipboard /> Orders</Link></li>
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/Shome'  className="flex items-center gap-x-2"><FaQuestionCircle /> Marketplace</Link></li>
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/Shome'  className="flex items-center gap-x-2"> <FaUser /> Customer</Link></li>
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/Shome'  className="flex items-center gap-x-2"> <FaBullseye /> Campaign</Link></li>
                    <li className='text-black font-montserrat hover:bg-white cursor-pointer font-bold p-2 rounded-md'><Link to='/Shome'  className="flex items-center gap-x-2"> <FaSun /> Themes</Link></li>
                </ul>
                </nav>
                <Link to='/Shome' className="hover:bg-white py-2 rounded-md">
                    <button className='pl-3 text-black font-sora text-sm cursor-pointer rounded-sm font-bold flex items-center gap-x-2'> <FaSlidersH /> Settings</button>
                </Link>
        </div>
    </div>
    </section>
  )
}

export default SSideBar