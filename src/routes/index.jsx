import React , {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from "../pages/home"
import {Favorite} from '../pages/favorite'
import {Cart} from "../pages/cart"
export default function UserRoutes() {

  const [favorites, setFavorites] = useState([])
  const [products, setProducts] = useState([])
  const [cart,setCart] = useState([])

  let props = {
    favorites ,
    setFavorites,
     products  ,
     setProducts ,
     cart, 
     setCart
  }

  return (
    <Routes>
      <Route path="/" element={<Home  {...props}  />} />
      <Route path="/favorite" element={<Favorite {...props} />} />
      <Route path="/cart" element={<Cart {...props} />} />

    </Routes>
  )
}
