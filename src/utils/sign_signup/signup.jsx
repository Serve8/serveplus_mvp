import React, { useState, useRef } from 'react';
import google from '../../assets/Img/Google.png'
import Facebook from '../../assets/Img/Facebook.png'
import { NavLink } from 'react-router-dom'
const Signup = () => {
      const [showForm, setShowForm] = useState(true);
      const mainRef = useRef(null);
    
      const handleClickOutside = (event) => {
        if (mainRef.current && !mainRef.current.contains(event.target)) {
         
          setShowForm(false);
        }
      };
  return (
    <div>
 {showForm && (
        <div className="w-screen h-screen flex items-center justify-center relative bg-black/25" onClick={handleClickOutside}>
          <div ref={mainRef} className="bg-white flex main flex-col justify-evenly px-8 rounded-md  w-1/3 h-[80%]">
                        <div className='flex justify-center gap-8 text-[25px] font-[700]'>
                              <p>Register</p>
                              <p>Sign in</p>
                        </div>
                        <div className="reg_fom  flex flex-col gap-4">
                              <small>Register an Account</small>
                              <form className='flex gap-5 flex-col '>
                                    <input className="py-2 rounded-xl px-5 " style={{'border':'1px gray solid', }} type="text" name="flex gap-4" placeholder='Username' id="" />
                                    <input className="py-2 rounded-xl px-5 " style={{'border':'1px gray solid', }} type="email" placeholder='Email' name="flex gap-4" id=" " />
                                     <input className="py-2 rounded-xl px-5 " style={{'border':'1px gray solid', }} type="password"  placeholder='Password' name="flex gap-4" id="" />
                                    <div className="pass flex flex-col w-full items-start gap-3">
                                    <input type="checkbox" className="ml-2" id="" />
                                    </div>
                                    <div className="flex gap-2 items-start flex-col">
                                          <div className="flex gap-4" >
                                           <input className=' bg-black' type="radio" name="Business" id="" />
                                               <span>Customer</span> 
                                          </div>

                                          <div className="flex gap-4">
                                           <input className=' bg-black' type="radio" name='Business' /> 
                                                <span>Business owner</span>
                                          </div> 
                                    </div>
                                    <div className="flex items-center justify-center rounded-xl text-white text-[24px] font-[500] bg-[#12CC02]">
                                          <NavLink to="/" >Create an Account</NavLink>
                                    </div> 
                              </form>
                              <div className="flex gap-4 items-center justify-center">
                                    <span className="span"></span>
                                          <p>or continue with</p>
                                    <span className="span"></span>
                              </div>
                              <div className="w-full items-center justify-center flex gap-8">
                                    <img src={google} alt="" />
                                    <img src={Facebook} alt="" />
                              </div>
                        </div>
                  </div>
            </div>
            )}
    </div>
  )
}

export default Signup
