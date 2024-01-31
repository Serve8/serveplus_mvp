import React from 'react'
import logo from "../../assets/Img/Logo.png"
import chat from '../../assets/Svg/Chat Room.svg';
import shop from '../../assets/Svg/Online Shopping.svg';
import  profile from '../../assets/Svg/Group 1082.svg';

const St_Nav = () => {
  return (
    <div>
          <div style={{borderBottom:'1px solid #dedddc'}} className="items-center  w-full  sticky flex justify-between">
          <div className="flex  items-center ">
            <div className="w-full items-center  flex">
                <img src={logo} className='w-[70%] object-contain' alt="" />
                <p className='text-[34px] font-[800] '>Serve+ </p>
            </div>
          </div> 
              <input style={{ outline:'none', border:'1px solid #D9D9D9', borderRadius:'20px' }} className="p-2 w-full bg-[#D9D9D9]" placeholder="Search for items" />
            <div className="flex gap-4 w-full justify-around ">
              <img src={chat} alt="" />
              <img src={shop} alt="" />
              <img src={profile} alt="" />
            \</div>
      </div>
    </div>
  )
}

export default St_Nav
