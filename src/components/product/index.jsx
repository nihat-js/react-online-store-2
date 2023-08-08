import React from 'react'
import "./index.scss"
import star from '../../assets/star.svg'
import starFilled from "../../assets/star-filled.svg"
import addToCart from "../../assets/add-to-cart.svg"
import removeFromCart from "../../assets/remove-from-cart.svg"
import MyStorage from '../../classes/MyStorage'
import PropTypes from 'prop-types';
export function Product({ favorites, setFavorites, cart, setCart, data: { id, name, price, imagePath, sku, color } }) {

  let isFav = favorites.indexOf(id) > -1
  let isInCart = cart.indexOf(id) > -1
  function handleStarClick() {
    if (isFav) {
      let res = confirm("Are you sure you want to  remove from the favorites?")
      if (!res) return false
    }
    let arr = isFav ? MyStorage.remove("favorites", (el) => el !== id) : MyStorage.add("favorites", id)
    setFavorites(arr)
  }

  function handleCartClick() {
    if (isInCart) {
      let res = confirm("Are you sure you want to  remove from the cart?")
      if (!res) return false
    }
    let arr = isInCart ? MyStorage.remove("cart", (el) => el !== id) : MyStorage.add("cart", id)
    setCart(arr)
  }

  return (
    <div className="card">
      <header>
        <img className='product-img' src={imagePath} alt="Product image" />
        <img className='star' src={isFav ? starFilled : star} alt="" onClick={handleStarClick} />
        <img className='cart' src={isInCart ? removeFromCart : addToCart} onClick={handleCartClick} alt="" />
      </header>
      <div className="body">
        <h2> Name {name}</h2>
        <p>Price: ${price} </p>
        <p>Color: {color}</p>
        <p>SKU code: 123456</p>
      </div>
    </div>
  )

}


Product.propTypes = {
  favorites: PropTypes.array.isRequired,
  setFavorites: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}