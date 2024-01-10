import React, { useState } from 'react';
import Main_nav from '../../../../utils/Nav/main_nav'
import person from '../../../../assets/Img/Vector.png'
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/Img/Logo.png';
import facebok from '../../../../assets/Img/face.png'
import ig from '../../../../assets/Img/IG.png'
import link from '../../../../assets/Img/link.png'
// import x from '../../../../assets/Img/x.png'
import tik from '../../../../assets/Img/tik.png'

const Home = () => {
  const [activeTab, setActiveTab] = useState('Product');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Main_nav/>
      <div className="flex flex-col   w-full h-screen gap-4">
        <div style={{borderRight:'1px solid #dedddc', width:'288px'}} className="px-5 py-3 gap-8 flex flex-col">
              <div className="flex  flex-col gap-5 ">
              <div style={{ display: 'flex', gap: '3rem' }} className='flex'>
                <p
                  onClick={() => handleTabClick('Product')}
                  style={{
                    textSize :activeTab === 'Product' ? '25px' : 'none',
                    borderBottom: activeTab === 'Product' ? '3px solid green' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  Product
                </p>
                <p
                  onClick={() => handleTabClick('Service')}
                  style={{
                    textSize : activeTab === 'Service' ? '25px' : 'none',
                    borderBottom: activeTab === 'Service' ? '3px solid green' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  Service
                </p>
              </div>
              <div style={{ display: activeTab === 'Product' ? 'block' : 'none' }}>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>Shoes and Sneakers</li>
                  <li>Backpack</li>
                  <li>Streetwears</li>
                  <li>Ladies Bags</li>
                  <li>Phones</li>
                  <li>Electronics</li>
                  <li>Stationeries</li>
                  <li>Cosmetics</li>
                </ul>
              </div>
              <div style={{ display: activeTab === 'Service' ? 'block' : 'none' }}>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li>Automobile</li>
                  <li>Catering</li>
                  <li>Fashion Designers</li>
                  <li>Laundry</li>
                  <li>Graphics Design</li>
                  <li>Electronics Repair</li>
                  <li>Real Estate</li>
                  <li>Hair Salon</li>
                  <li>Courier</li>
                </ul>
              </div>
          </div> 
                <NavLink to='/' style={{border:'1.5px solid red'}} className='w-[200px] flex items-center text-[25px] font-[700] text-red-600 justify-center gap-3 py-2' > <img src={person} className='object-contain'  alt="" /> Sign up</NavLink>
            <div className="">
              <p>
                Sign up to open an online store, sell or buy  in auctions, showcase your expertise, and much more.
              </p>
            </div>
            <div className="">
                <div className="" >
                  <p>Blog</p>
                  <p>careers</p>
                  <p>contact</p>
                  <p>safety</p>
                  <p>Terms</p>
                  <p>Privacy</p> 
                </div>
                <div className="">
                    <p>© 2024 Serve + Inc.</p>
                </div>
            </div>
        </div>
        <div className="bg-black flex py-8 px-4 place-items-center w-full h-full">
          <div className="flex justify-between w-full h-full">
              <div className="flex flex-col  w-full h-full justify-between" >
                  <div className="flex" >
                    <img src={logo} className='object-contain'  width={50} alt="" />
                    <p className='text-[34px] text-green-500 font-[800] '>Serve+ </p>
                  </div>
                  <div className="flex gap-8 text-white/50"> 
                        <p>© 2024 Serve + Inc.</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                  </div>
              </div>
              <div className="flex flex-col justify-between gap-8 w-full text-white">
                <div className="flex justify-between" >
                  <div className="flex flex-col gap-7 w-full">
                      <div className="">
                        <h1>serve +</h1>
                      </div>
                      <div className="">
                            <p>Blog</p>
                            <p>Career</p>
                            <p>About us</p>
                            <p>Safety</p>
                      </div>
                  </div>
                  <div className="flex flex-col gap-7 w-full">
                      <div className="">
                        <h1>Get Help</h1>
                      </div>
                      <div className="">
                            <p>Payment Options</p>
                            <p>Contact us</p>
                            <p>Delivery</p> 
                      </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start">
                  <div className="">
                      <p>join us on</p>
                  </div>
                  <div className="flex gap-4">
                        <img src={facebok}  width={50} alt="" />
                        <img src={tik}  width={50} alt="" />
                        <img src={ig}  width={50} alt="" />
                        <img src={link}  width={50} alt="" />
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>
 
    </>
  )
}

export default Home