import React from 'react'
import   img1 from '../../../../assets/Img/Explore/Rectangle 454.png'
import   img2 from '../../../../assets/Img/Explore/Rectangle 455.png'
import   img3 from '../../../../assets/Img/Explore/Rectangle 456.png'
import   img4 from '../../../../assets/Img/Explore/Rectangle 457.png'
import   img5 from '../../../../assets/Img/Explore/Rectangle 458.png'
import   img6 from '../../../../assets/Img/Explore/Rectangle 459.png'
import   img7 from '../../../../assets/Img/Explore/Rectangle 460.png'
import   img8 from '../../../../assets/Img/Explore/Rectangle 461.png'
import   img9 from '../../../../assets/Img/Explore/Rectangle 462.png'
import   img10 from '../../../../assets/Img/Explore/Rectangle 463.png'
import   img11 from '../../../../assets/Img/Explore/Rectangle 464.png'
import   img12 from '../../../../assets/Img/Explore/Rectangle 465.png'
import   img13 from '../../../../assets/Img/Explore/Rectangle 466.png'
import   img14 from '../../../../assets/Img/Explore/Rectangle 467.png'
import   img15 from '../../../../assets/Img/Explore/Rectangle 468.png'
import   img16 from '../../../../assets/Img/Explore/Rectangle 469.png'
import   img17 from '../../../../assets/Img/Explore/Rectangle 470.png'
import   img18 from '../../../../assets/Img/Explore/Rectangle 471.png'
import   img19 from '../../../../assets/Img/Explore/Rectangle 472.png'
import   img20 from '../../../../assets/Img/Explore/Rectangle 473.png'
import Main_nav from '../../../../utils/Nav/main_nav'
import logo from '../../../../assets/Img/Logo.png';
import facebok from '../../../../assets/Img/face.png'
import ig from '../../../../assets/Img/IG.png'
import link from '../../../../assets/Img/link.png' 
import tik from '../../../../assets/Img/tik.png'

const Explore = () => {
  const catrgories = [
    {
        'id':1,
        'img':img1,
        'name':"Men's Fashion"
  },
  {
    'id':2,
    'img':img2,
    'name':"phones"
},
{
  'id':3,
  'img':img3,
  'name':'Sneakers'
},
{
  'id':4,
  'img':img4,
  'name':'Electromics'
},
{
  'id':5,
  'img':img5,
  'name':'Autopart'
},
{
  'id':6,
  'img':img6,
  'name':'Cosmetics'
},
{
  'id':7,
  'img':img7,
  'name':'Home and Office'
},
{
  'id':8,
  'img':img8,
  'name':'Groceries'
},
{
  'id':9,
  'img':img9,
  'name':'Apparels'
},
{
  'id':10,
  'img':img10,
  'name':'Wigs'
},
{
  'id':11,
  'img':img11,
  'name':"Women's Fashion"
},
{
  'id':12,
  'img':img12,
  'name':'Stationeries'
},
{
  'id':13,
  'img':img13,
  'name':'Ladies bags'
},
{
  'id':14,
  'img':img14,
  'name':'Backpacks'
},
{
  'id':15,
  'img':img15,
  'name':'Wrist watches'
},
{
  'id':16,
  'img':img16,
  'name':'Games'
},
{
  'id':17,
  'img':img17,
  'name':'Accessories'
},
{
  'id':18,
  'img':img18,
  'name':'Kids Wears'
},
{
  'id':19,
  'img':img19,
  'name':'Sports'
},
{
  'id':20,
  'img':img20,
  'name':'Palms'
},
]
  return (
    <>
                <Main_nav/>
               <div className="flex my-4 gap-4 overflow-x-hidden flex-wrap items-center">
                    {catrgories.map(item => (
                         <div className="shoes flex flex-wrap  gap-4">
                      <div key={item.id} className='flex flex-col gap-4 px-9'>
                      <div className=" w-full text-white text-[25px] flex font-700 h-full relative">
                        <div className="main">
                          <img  src={item.img} className='object-contain w-ful h-full' alt="" />
                        </div>
                        <div className="others w-full h-full absolute  flex top-0 buttom-0 left-0 right-0 items-center justify-center bg-black/50  w-full h-full">
                          {item.name}
                        </div>
                      </div>
                      </div>
                 </div>
                     ))}
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
    </>
  )
}

export default Explore