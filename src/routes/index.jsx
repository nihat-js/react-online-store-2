import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from "../pages/home"
import { Favorite } from '../pages/favorite'
import { Cart } from "../pages/cart"
import { fetchProducts } from '../api/api'
import MyStorage from '../classes/MyStorage'
import { Nav } from '../components/nav/index'
export default function UserRoutes() {

  const [favorites, setFavorites] = useState([])
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  let props = {
    favorites,
    setFavorites,
    products,
    setProducts,
    cart,
    setCart
  }


  useEffect(() => {



    setFavorites(MyStorage.load("favorites"))
    setCart(MyStorage.load('cart'))



    fetchProducts().then(products => {
      setProducts([...MyStorage.load("products"), ...products])
    })
  }, [])

  return (
    <div className='main-container'>
      <Nav />
      <Routes>
          <Route path="/" element={<Home  {...props} />} />
          <Route path="/favorite" element={<Favorite {...props} />} />
          <Route path="/cart" element={<Cart {...props} />} />
      </Routes>
    </div>
  )
}
