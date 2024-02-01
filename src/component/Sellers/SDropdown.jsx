import { FaHome, FaClipboard, FaBullseye, FaUser, FaSlidersH, FaQuestionCircle, FaSun  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdown = ({ setShow }) => {
  return (
    <div className="md:hidden w-full h-screen bg-black/10 fixed top-[15vh]">
         <div className="flex flex-col gap-y-10 fixed right-0 w-[75vw] h-full animate-open-menu px-4 z-[400] overflow-hidden bg-white">

                <nav className="flex flex-col gap-4 mt-4 items-start">
                <ul className="flex flex-col gap-y-5">
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/seller-home' className="flex items-center gap-x-2"><FaHome/> <p>Home</p></Link></li>
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/seller-home/product'  className="flex items-center gap-x-2"> <FaQuestionCircle /> Products</Link></li>
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/Shome'  className="flex items-center gap-x-2"> <FaClipboard /> Orders</Link></li>
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/Shome'  className="flex items-center gap-x-2"><FaQuestionCircle /> Marketplace</Link></li>
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/Shome'  className="flex items-center gap-x-2"> <FaUser /> Customer</Link></li>
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/Shome'  className="flex items-center gap-x-2"> <FaBullseye /> Campaign</Link></li>
                    <li className='text-black font-montserrat hover:bg-gray-300 cursor-pointer font-bold p-2 rounded-md' onClick={() => setShow((prev) => !prev)}><Link to='/Shome'  className="flex items-center gap-x-2"> <FaSun /> Themes</Link></li>
                </ul>
                </nav>
                <Link to='/Shome' onClick={() => setShow((prev) => !prev)} className="hover:bg-gray-300 py-2 rounded-md">
                    <button className='pl-3 text-black font-sora text-sm cursor-pointer rounded-sm font-bold flex items-center gap-x-2'> <FaSlidersH /> Settings</button>
                </Link>
        </div>
    </div>
   
  )
}

export default Dropdown