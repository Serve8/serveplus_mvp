import {Routes, Route} from 'react-router-dom'
import Home from '../src/component/Buyer/Nav_pages/Home/Home'
import Explore from '../src/component/Buyer/Nav_pages/Explore/Explore'
import Signup from './utils/sign_signup/signup'
import Sellers_nav from './utils/Nav/Sellers_nav'
import Shome from './component/Sellers/Home/Shome'

function App() {
 
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shome" element={<Shome/>} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Signup" element={<Signup/>} />

        <Route path="/S_nav" element={<Sellers_nav />}/>
       {/* <Route path="/Auction" element={<Auction />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  )
}

export default App
