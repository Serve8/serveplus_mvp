import React from 'react'
import { FiSearch } from "react-icons/fi";
const Sellers_nav = () => {
  return (
    <div>
        <div className="flex sticky bg-slate-100 items-between justify-center">
        <div className="w-full items-center  flex">
                <img src={logo} className='w-[70%] object-contain' alt="" />
                <p className='text-[34px] font-[800] '>Serve+ </p>
            </div> 
              <div className="flex justify-between items-center w-full bg-[rgba(217, 217, 217, 0.34)] rounded-full" style={{"border":"1.5px solid #7C7873 "}}>
                  <input type="search"  className='w-full ' placeholder='Type to search.....'/>
                  <FiSearch />
              </div>
              <div className=""></div>
        </div>
    </div>
  )
}

export default Sellers_nav
