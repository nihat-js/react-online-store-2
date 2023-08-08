import React from 'react'
import { Products } from '../../components/products/index';
import { Nav } from '../../components/nav';

export function Favorite({ products, favorites }) {

  const favProducts = products.map(p => favorites.indexOf(p.id) > -1 ? p : undefined)

  return (
    <div>
      <Nav/>
      This is favorite page
      <Products products={products} favorites={favorites} setFavorites={setFavorites} />
    </div>
  )
}
