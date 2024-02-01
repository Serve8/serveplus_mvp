import React from 'react'
import logo from "../../assets/Img/Logo.png" 
import shop from '../../assets/Svg/Online Shopping.svg';
import { CiSearch } from "react-icons/ci"; 

const St_Nav = () => {
  return (
    <div>
          <div style={{borderBottom:'1px solid #dedddc'}} className="items-center w-screen sticky flex justify-between">
          <div className="flex  w-full items-center "> 
                <img src={logo} className='  object-contain' alt="" />
                <p className='text-[34px] font-[800] '>Serve+ </p> 
          </div> 
          <div style={{border:'1px solid #D9D9D9', borderRadius:'10px'}} className='flex items-center w-full bg-[#D9D9D9]'>
              <input style={{ outline:'none',  }} className="p-2 w-full bg-transparent"   placeholder="Search for items" />
              <CiSearch className='text-[2.5rem] font-[700] bg-[#D9D9D9]' /> 
          </div>
            <div className="flex   w-full   justify-center ">
              <div className='flex gap-3 items-center justify-center px-4 py-2 bg-[#D9D9D9] shadow rounded'>
                <p className='text-[25] font-[700]'>Myshop</p> 
                <img src={shop} alt="" /> 
              </div>
              </div>
      </div>
    </div>
  )
}

export default St_Nav
