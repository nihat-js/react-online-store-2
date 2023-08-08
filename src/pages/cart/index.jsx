import React from 'react'
import { Products } from '../../components/products/index';

export function Cart({ products, favorites,setFavorites,cart,setCart }) {

  const cartProducts = products.filter(p => cart.indexOf(p.id) > -1  )
  return (
    <div className='cart-page'>
      <p> Check your products in cart </p>
      <Products products={cartProducts} favorites={favorites} setFavorites={setFavorites} cart={cart} setCart={setCart} />
    </div>
  )
}
