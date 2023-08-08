import { useState } from 'react';
import { useEffect } from 'react';
import {Products} from '../../components/products/index';
import {CreateProduct} from '../../components/modal/createProduct/index';
import { fetchProducts, } from '../../api/api'
import MyStorage from "../../classes/MyStorage"
import { Nav } from '../../components/nav';
export function Home({products,setProducts,favorites,setFavorites,cart,setCart}) {


  
  const [showAddModal, setShowAddModal] = useState(false)







  useEffect(() => {

    setFavorites(MyStorage.load("favorites"))
    fetchProducts().then(products => {
      setProducts([...MyStorage.load("products"), ...products])
    })
  }, [])


  return (
    <div className="main-container">
      <Nav/>
      <button onClick={() => setShowAddModal(true)} >  Add Product </button>
      {/* <CreateProduct products={products} setProducts={setProducts} showModal={showAddModal} setShowModal={setShowAddModal} /> */}



      <Products products={products} favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}
