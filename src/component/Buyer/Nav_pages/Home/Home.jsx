import React, { useState, useEffect } from 'react';
import Main_nav from '../../../../utils/Nav/main_nav'
import person from '../../../../assets/Img/Vector.png'
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/Img/Logo.png';
import facebok from '../../../../assets/Img/face.png'
import ig from '../../../../assets/Img/IG.png'
import link from '../../../../assets/Img/link.png' 
import tik from '../../../../assets/Img/tik.png'
import Kine from '../../../../assets/Img/Kinel Collections.png'
import Kinel from '../../../../assets/Img/Kinel.png'
import iin from '../../../../assets/Img/mobile iin.png'
import N from '../../../../assets/Img/mobile in.png'
import Mk from  '../../../../assets/Img/Mk.png'
import M from  '../../../../assets/Img/Mkitchen.png'
import Ac from '../../../../assets/Img/Ace k.png'
import A    from '../../../../assets/Img/Ace.png'
//recentlly search 
import sneak from '../../../../assets/Img/snieakers.png'
import des from '../../../../assets/Img/designer.png'
import gros from '../../../../assets/Img/groces.png'
import bag from '../../../../assets/Img/Bpack.png'
import Signup from '../../../../utils/sign_signup/signup';
const Home = () => {
  const [activeTab, setActiveTab] = useState('Product');
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const hasShownSignup = localStorage.getItem('hasShownSignup');

    if (!hasShownSignup) {
      const timeoutId = setTimeout(() => {
        setShowSignup(true);
        localStorage.setItem('hasShownSignup', 'true');
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const Update = [
    { 
      id:1,
      'name': 'Kinel Collections',
      'company_image': Kinel,
      'About': '🔥XMAS STEALS 🔥Shoes•Lagos',
      'main_image': Kine
    },
    {
      id:2,
      'name': 'Jade Shoes',
      'company_image': N,
      'About': '🔥XMAS STEALS 🔥Shoes•Lagos',
      'main_image': iin
    },  { 
      id:3,
      'name': 'Jade Shoes',
      'company_image': M,
      'About': '🔥XMAS STEALS 🔥Shoes•Lagos',
      'main_image': Mk
    },  { 
      id:4,
      'name': 'Jade Shoes',
      'company_image': A,
      'About': '🔥XMAS STEALS 🔥Shoes•Lagos',
      'main_image': Ac
    },
    
  ]

  const frequent = [
    {
      'id': 1,
      'img':sneak,
      'name':'Sneakers'
    },
    {
      'id': 2,
      'img':des,
      'name':'Designers'
    },
    {
      'id': 3,
      'img':gros,
      'name':'Groceries'
    },
    {
      'id': 4,
      'img':bag,
      'name':'Backpack'
    },
  ]


  
const closeSignup = () => {
    setShowSignup(false);
  };
 
  return (
    <>
      <div className="relative w-screen h-screen">
      <Main_nav/>  
      {showSignup && (
          <div className="absolute z-10">
            <Signup closeSignup={closeSignup} />
          </div>
        )}
      <div className="flex flex-col   w-full h-screen gap-4">
        <div className="flex">
          <div style={{borderRight:'1px solid #dedddc', width:'288px'}} className="px-5 py-3 gap-8  justify-evenly flex flex-col">
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
            <div
              style={{ border: '1.5px solid red', cursor: 'pointer' }}
              className='w-[200px] flex items-center text-[25px] font-[700] text-red-600 justify-center gap-3 py-2'
              onClick={() => setShowSignup(true)}
            >
              {' '}
              <img src={person} className='object-contain' alt='' /> Sign up
            </div>
            <div className="">
                <p>
                  Sign up to open an online store, sell or buy  in auctions, showcase your expertise, and much more.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-4" >
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
          <div className="flex flex-col w-full h-full justify-evenly">
              <div className="flex flex-col gap-4  items-start">
                <h1 className='text-[25px] font-[700] mt-4 mx-8'>Update</h1>
                <div className="flex gap-8 items-center">
                    {Update.map(item => (
                         <div className="shoes flex  gap-8">
                      <div key={item.id} className='flex flex-col gap-4 px-9'>
                        <div className="head flex items-center gap-4">
                          <img src={item.company_image} alt="" />
                          <p>{item.name}</p>
                        </div>
                        <div className="main">
                          <img  src={item.main_image} className='object-contain' alt="" />
                        </div>
                        <div className="others">
                          {item.About}
                        </div>
                      </div>
                 </div>
                     ))}
                </div>
              </div>
              <div className="flex flex-col gap-4  items-start">
                <h1 className='text-[25px] font-[700] mt-4 mx-8'>Frequently Searched</h1>
                <div className="flex gap-8 items-center">
                    {frequent.map(item => (
                         <div className="shoes flex  gap-8">
                      <div key={item.id} className='flex flex-col gap-4 px-9'>
                      <div className=" w-full text-white text-[25px] font-700 h-full relative">
                        <div className="main">
                          <img  src={item.img} className='object-contain w-full h-full' alt="" />
                        </div>
                        <div className="others w-full h-full absolute flex top-0 buttom-0 left-0 right-0 items-center justify-center bg-black/40 w-full h-full">
                          {item.name}
                        </div>
                      </div>
                      </div>
                 </div>
                     ))}
                </div>
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
     </div>
    </>
  )
}

export default Home