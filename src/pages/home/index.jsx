import { useState } from 'react';
import { useEffect } from 'react';
import {Products} from '../../components/products/index';
import {CreateProduct} from '../../components/modal/createProduct/index';
import { fetchProducts, } from '../../api/api'
import MyStorage from "../../classes/MyStorage"
import { Nav } from '../../components/nav';
export function Home({products,setProducts,favorites,setFavorites,cart,setCart}) {


  
  const [showAddModal, setShowAddModal] = useState(false)









  return (
    <div className='home-page'>
      <button  className='add-product' onClick={() => setShowAddModal(true)} >  Add Product </button>
      <CreateProduct products={products} setProducts={setProducts} showModal={showAddModal} setShowModal={setShowAddModal} />
      <Products products={products} favorites={favorites} setFavorites={setFavorites} cart={cart} setCart={setCart} />



    </div>
  );
}
