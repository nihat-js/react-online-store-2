import React from 'react'
import { Products } from '../../components/products/index';

export function Favorite({ products, favorites,setFavorites ,cart , setCart }) {
  const favProducts = products.filter(p => favorites.indexOf(p.id) > -1  )
  return (
    <div className='favorite-page'>
      <p style={{margin : "20px 0"}}> Check your favorite products  </p>
      <Products products={favProducts} favorites={favorites} setFavorites={setFavorites}  cart={cart} setCart={setCart} />
    </div>
  )
}
