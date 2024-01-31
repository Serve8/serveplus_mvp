import React from 'react'
import home from "../../assets/Svg/sellers/Home Page.png"
import product from "../../assets/Svg/sellers/Basket.png"
import order from "../../assets/Svg/sellers/Purchase Order.png"
import Customer from "../../assets/Svg/sellers/Customer.png"
import market from "../../assets/Svg/sellers/Online Shop.png"
import campaign from "../../assets/Svg/sellers/Goal.png"
import themes from "../../assets/Svg/sellers/Themes.png"
import Settings from "../../assets/Svg/sellers/Settings.png"
const Sellers_nav = () => {
  return (
    <div className='px-5  py-4 '>
      <div className='flex flex-col items-center h-screen  gap-5 justify-between' >
        <div className='flex flex-col items-center gap-5 justify-center  '>
                <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={product} className='object-contain'/> 
                  <p>Product</p>              
                </div>
                <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={order} className='object-contain'/> 
                  <p>Order</p>              
                </div>            
                <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={market} className='object-contain'/> 
                  <p>Market</p>              
                </div>
                <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={Customer} className='object-contain'/> 
                  <p>Customer</p>              
                </div>
                 <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={campaign} className='object-contain'/> 
                  <p>Campaign</p>              
                </div>
                <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={themes} className='object-contain'/> 
                  <p>Themes</p>              
                </div> 
        </div> 
        <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-slate-400 gap-4'>
                  <img src={Settings} className='object-contain'/> 
                  <p>Settings</p>              
                </div>
      </div>
    </div>
  )
}

export default Sellers_nav
