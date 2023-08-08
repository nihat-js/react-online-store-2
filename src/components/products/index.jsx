import React from 'react'
import {Product} from '../../components/product/index'
import "./index.scss"
import PropTypes from 'prop-types'; // ES6


export  function Products({products,favorites,  setFavorites,cart,setCart}) {
  return (
    <div className='products-component'> 

      {products.length > 0  && products.map((el,i)=>  <Product  key={i}  data={el}  favorites={favorites}   setFavorites={setFavorites} cart={cart} setCart={setCart} />  )}

      {products.length == 0 && <p> Oops, Nothing here </p> }

    </div>
  )
}

Products.prototypes = {
  products :  PropTypes.array.isRequired,
  favorites : PropTypes.array.isRequired,
  setFavorites : PropTypes.func.isRequired,
  cart : PropTypes.array.isRequired,
  setCart : PropTypes.func.isRequired
}