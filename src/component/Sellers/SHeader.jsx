//this logo is too wide.. taking too much space
import Logo from "../../assets/Img/Logo.png"
import { useState } from 'react'
import { FaStore, FaSearch, FaBars, FaTimesCircle } from "react-icons/fa"
import Dropdown from './SDropdown'

const SHeader = () => {
  const [searchText, setSearchText] = useState("")
  const[show, setShow] = useState(false)


  return (
    <header className='w-full h-[15vh] fixed top-0 border-b border-black z-[10000] bg-white'>
        <div className='flex gap-2 justify-between items-center md:px-10 py-4'>
            <div className='logo inline md:flex items-center'>
                <img src={Logo} className='inline'></img>
                <span className='hidden md:block font-sora text-sm md:text-xl font-bold'>Serve<span>+</span></span>
            </div>
            <div className='searchBar flex items-center w-[70%] h-[7vh] md:h-[8vh] bg-gray-100 p-2 rounded-md border border-gray-800'>
              <form onSubmit={(e) => e.preventDefault()} className='flex justify-between items-center gap-x-2 w-full'>

                <input
                  type='text'
                  required
                  name='searchBox'
                  placeholder='Type to search...'
                  value={searchText}
                  onChange={e => setSearchText(e.target.value)}
                  className='w-[95%] px-2 py-6 bg-transparent placeholder:text-gray-300 placeholder:font-sora placeholder:text-base placeholder:md:text-xl font-sora'
                />

                <button className='text-xl text-gray-300'><FaSearch /></button>
              </form>
            </div>

            <div className='hidden md:block'>
              <div className='myShop flex items-center bg-gray-100 p-4 rounded-md gap-2'>
                <span className="font-sora font-semibold">My Shop</span>
                <FaStore />
              </div>
            </div>

            {show === false ?  <FaBars className='block text-2xl md:hidden cursor-pointer mx-4' onClick={() => setShow(prev => !prev)}/> :         <FaTimesCircle className="font-semibold font-montserrat text-xl cursor-pointer mx-4" onClick={() => setShow((prev) => !prev)} /> }
           
            {show && <Dropdown setShow={setShow}/>}

        </div>
    </header>
  )
}

export default SHeader