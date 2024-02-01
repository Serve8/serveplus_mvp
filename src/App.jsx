import {Routes, Route} from 'react-router-dom'
import Home from '../src/component/Buyer/Nav_pages/Home/Home'
import Explore from '../src/component/Buyer/Nav_pages/Explore/Explore'
import Signup from './utils/sign_signup/signup'
//import Shome from './component/Sellers/Home/Shome'
import SMain from './component/Sellers/SMain'
import SLayout from './component/Sellers/SLayout'
import SProduct from './component/Sellers/SProduct'
import SAddProduct from './component/Sellers/SAddProduct'


function App() {
 
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* Seller's Page */}
        <Route path="seller-home/*" element={<SLayout/>} >

              <Route index element={<SMain />} />
              <Route index path="product" element={<SProduct />} />
              <Route path="add-product" element= {<SAddProduct />} />


        </Route>
        {/* Seller's Page */}

        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Signup" element={<Signup/>} />

       {/* <Route path="/Chat" element={<Chat />}/>
        <Route path="/Auction" element={<Auction />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  )
}

export default App
