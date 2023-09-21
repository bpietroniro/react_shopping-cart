const Product = ({ id, title, price, quantity, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault()
    onDelete(id)
  }

  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="edit">Edit</button>
      </div>
      <button className="delete-button" onClick={handleDelete} ><span>X</span></button>
    </div>
  )
}

export default Product