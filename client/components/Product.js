import { useState } from 'react'

const Product = ({ product, onDelete, onUpdate, onAdd }) => {
  const [editMode, setEditMode] = useState(false)

  const handleDelete = (e) => {
    e.preventDefault()
    onDelete(product._id)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    onAdd(product._id)
  }

  const showEditForm = () => {
    setEditMode(true)
  }

  const hideEditForm = (e) => {
    setEditMode(false)
  }

  const EditForm = () => {
    const [title, setTitle] = useState(product.title)
    const [price, setPrice] = useState(product.price)
    const [quantity, setQuantity] = useState(product.quantity)

    const handleChange = (e) => {
      switch (e.target.id) {
        case "product-name":
          setTitle(e.target.value)
          break;
        case "product-price":
          setPrice(e.target.value)
          break;
        case "product-quantity":
          setQuantity(e.target.value)
          break;
      }
    }

    const handleUpdate = (e) => {
      e.preventDefault()
      onUpdate(product._id, { title, price, quantity})
      setEditMode(false)
    } 

    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form onSubmit={handleUpdate}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={title}
              aria-label="Product Name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="number"
              id="product-price"
              value={price}
              aria-label="Product Price"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="number"
              id="product-quantity"
              value={quantity}
              aria-label="Product Quantity"
              onChange={handleChange}
            />
          </div>

          <div className="actions form-actions">
            <button type="submit" onClick={handleUpdate}>Update</button>
            <button type="button" onClick={hideEditForm}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="edit" onClick={showEditForm}>Edit</button>
      </div>
      { editMode && <EditForm /> }
      <button className="delete-button" onClick={handleDelete} ><span>X</span></button>
    </div>
  )
}

export default Product