import { useEffect, useState } from "react"

import ProductList from "./ProductList"
import Cart from "./Cart"
import AddProductForm from "./AddProductForm"
import { getProducts, createProduct, deleteProductById, updateProductById, getCart, addItemToCart, checkout } from "../services/products"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  }

  const fetchCartItems = async () => {
    const data = await getCart();
    setCart(data);
  }

  // fetchProducts, fetchCartItems => dependency array
  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, [])

  const handleAddProduct = async (newProduct, callback) => {
    try {
      const data  = await createProduct(newProduct);
      setProducts(products.concat(data))
      if (callback) {
        callback();
      }
      setAddMode(false)
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (productId) => {
    try {
      await deleteProductById(productId)
      setProducts(products.filter(p => p._id !== productId))
    } catch (e) {
      console.log(e)
    }
  }

  const handleUpdate = async (productId, updatedProduct) => {
    try {
      const data = await updateProductById(productId, updatedProduct)
      setProducts(products.map(p => p._id !== productId ? p : data))
    } catch (e) {
      console.log(e)
    }
  }

  const addToCart = async (productId) => {
    try {
      const data = await addItemToCart(productId)
      fetchProducts();
      fetchCartItems();
    } catch (e) {
      console.log(e)
    }
  }

  const handleCheckout = async () => {
    try {
      await checkout();
      setCart([]);
    } catch (e) {
      console.log(e)
    }
  }

  const showAddForm = () => {
    setAddMode(true)
  }

  const addFormVisible = addMode ? "add-form visible" : "add-form"

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cart} onCheckout={handleCheckout} />
      </header>
      <main>
        <h2>Products</h2>
        <div className="product-listing">
          <ProductList onDelete={handleDelete} onUpdate={handleUpdate} onAdd={addToCart} products={products} />
        </div>
        <div className={addFormVisible}>
          <p>
            <button className="add-product-button" onClick={showAddForm}>
            Add a Product
            </button>
          </p>
          <h3>Add Product</h3>
          { addMode && <AddProductForm onSubmit={handleAddProduct} /> }
        </div>
      </main>
    </div>
  )
}

export default App;
