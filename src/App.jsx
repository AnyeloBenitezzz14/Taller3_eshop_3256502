// import { useState } from 'react'
// import reactLogo from '/img/react.svg'
// import viteLogo from '/img/vite.svg'

import { HashRouter, Routes, Route } from 'react-router-dom'
import { ShopProvider } from './features/view/hooks/useContext1.jsx'

// Components Layout
import { Header } from './features/layout/components/Header.jsx'
import { Content } from "./features/layout/components/Content"
import { Footer } from './features/layout/components/Footer'
// import './App.jsx'

//Components Auth

import { Myaccount } from './features/auth/components/Myaccount'
import { Mybuys } from './features/auth/components/Mybuys'
import { Myfavorites } from './features/auth/components/Myfavorites'
import { Mycart } from './features/auth/components/Mycart'

//Components View

import { Article } from './features/view/Components/Article'
import { Offers } from './features/view/Components/Offers'


function App() {

  return (
    <ShopProvider>
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Content></Content>} />
          <Route path='/articles' element={<Article></Article>} />
          <Route path='/offers' element={<Offers></Offers>} />
          <Route path='/cart' element={<Mycart></Mycart>} />
          {/* simple guitar product page */}
          <Route path='/myaccount' element={<Myaccount></Myaccount>} />
          <Route path='/mybuys' element={<Mybuys></Mybuys>} />
          <Route path='/myfavorites' element={<Myfavorites></Myfavorites>} />
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </ShopProvider>
  )
}

export default App