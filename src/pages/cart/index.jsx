import React from 'react'
import { Products } from '../../components/products/index';
import { Nav } from '../../components/nav';

export function Cart({ products, favorites,setFavorites }) {

  const cartProducts = products.filter(p => favorites.indexOf(p.id) > -1  )
  return (
    <div>
      <Nav/>
      This is favorite page
      <Products products={cartProducts} favorites={favorites} setFavorites={setFavorites} />
    </div>
  )
}
