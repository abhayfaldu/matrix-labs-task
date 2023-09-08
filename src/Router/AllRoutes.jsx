import React from 'react'
import {Routes, Route} from 'react-router-dom'
import TokenAddres from '../Components/TokenAddress.jsx'
import PairAddress from '../Components/PairAddress.jsx'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/token-address' element={<TokenAddres />}></Route>
      <Route path='/pair-address' element={<PairAddress />}></Route>
    </Routes>
  )
}

export default AllRoutes
