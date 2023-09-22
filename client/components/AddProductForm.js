import { useState } from "react"

const AddProductForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, price, quantity}, reset);
  }

  const reset = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          required
          onChange={(e) => { setTitle(e.target.value)} }
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-price">Price:</label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          min="0"
          step="0.01"
          required
          onChange={(e) => { setPrice(Number(e.target.value))} }
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-quantity">Quantity:</label>
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          min="0"
          required
          onChange={(e) => { setQuantity(Number(e.target.value))} }
        />
      </div>
      <div className="actions form-actions">
        <button type="submit">Add</button>
        <button type="button" onClick={resetAndHideAddForm}>Cancel</button>
      </div>
    </form>
  )
}

export default AddProductForm