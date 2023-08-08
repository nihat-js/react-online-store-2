import React from 'react'
import { Products } from '../../components/products/index';
import { Nav } from '../../components/nav';

export function Favorite({ products, favorites,setFavorites }) {

  const favProducts = products.filter(p => favorites.indexOf(p.id) > -1  )
  console.log({favProducts})
  return (
    <div>
      <Nav/>
      This is favorite page
      <Products products={favProducts} favorites={favorites} setFavorites={setFavorites} />
    </div>
  )
}
