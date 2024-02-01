import SLayout from "../SLayout"
import { Routes, Route } from "react-router-dom"
import SMain from "../SMain"
import SProduct from "../SProduct"

const Shome = () => {
  return (
    <Routes>
      
      <Route path="/seller" element={<SLayout />} >

        <Route index element={<SMain />} />
        <Route index path="/product" element={<SProduct />} >

        </Route>

      </Route>
    
    </Routes>
  )
}

export default Shome
