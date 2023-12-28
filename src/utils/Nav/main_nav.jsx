import React from 'react';
import logo from '../../assets/Img/Logo.png';
import { NavLink } from 'react-router-dom';

const Main_nav = () => {
  return (
    <div className="max-w-screen items-center sticky flex justify-between">
      <div className='w-full'>
        <div className="flex items-center ">
          <img src={logo} className='object-contain' alt="" />
          <h1 className='text-[34px] font-[800]'>Serve +</h1>
        </div>
      </div>
      <div className="w-full flex justify-between ">
        <NavLink to="/" className="text-[25px] font-[600]">Home</NavLink>
        <NavLink to="/Explore" className="text-[25px] font-[600]">Explore</NavLink>
      </div>
      <div className="w-full">
        <input style={{ maxWidth b: '578px', outline:'none', border:'1px solId #D9D9D9', borderRadius:'20px' }} className="p-4" id="" />
      </div>
    </div>
  );
};

export default Main_nav;
