import React, { useState } from 'react'
import {Modal} from '../modal/index'
import "./index.scss"
import MyStorage from '../../../classes/MyStorage'
import { v4 } from "uuid"
import PropTypes from 'prop-types';

export  function CreateProduct({ products, setProducts, showModal, setShowModal }) {

  const emptyData = {
    name: "",
    price: 0,
    imagePath: "",
    color: "",
    sku: 0,
  }

  const [formData, setFormData] = useState(emptyData)


  function handleSave(e) {
    e.preventDefault()
    formData.id = v4()
    MyStorage.add("products", formData)
    setProducts(prevState => [formData, ...products,])
    setShowModal(false)
    setFormData(emptyData)

  }

  function handleChange(e) {
    setFormData(prevState => new Object({ ...prevState, [e.target.name]: e.target.value }))
  }

  function handleCancel() {
    setShowModal(false)
  }

  return (
    <Modal className="add-product-modal" show={showModal} setShow={setShowModal}   >
      <h2 className='title'> Add Product   </h2>
      <form action="">
        <div className="form-group">
          <h4> Name</h4>
          <input type="text" name="name" value={formData?.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <h4> Price $</h4>
          <input type="number" name="price" value={formData?.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <h4> Image Path </h4>
          <input type="text" name="imagePath" value={formData?.imagePath} onChange={handleChange} />
        </div>
        <div className="form-group">
          <h4>Color</h4>
          <input type="text" name="color" value={formData?.color} placeholder='Color' onChange={handleChange} />
        </div>
        <div className="form-group">
          <h4> SKU </h4>
          <input type="number" name="sku" value={formData?.sku} onChange={handleChange} />
        </div>
        <div className="actions">
          <button onClick={handleCancel} className='btn-cancel'> Cancel </button>
          <button onClick={handleSave} className='btn-save'> Save it </button>
        </div>
      </form>
    </Modal>
  )
}


CreateProduct.propTypes = {
  products: PropTypes.array.isRequired,
  setProducts : PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
}