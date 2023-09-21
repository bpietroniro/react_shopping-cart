import { useEffect, useState } from "react"
import axios from "axios"

import mockData from "../mockData/data"
import ProductList from "./ProductList"
import Cart from "./Cart"
import AddProductForm from "./AddProductForm"
import { getProducts, createProduct, deleteProductById } from "../services/products"

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, [])

  const handleAddProduct = async (newProduct, callback) => {
    try {
      const data  = await createProduct(newProduct);
      setProducts(products.concat(data))
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (productId) => {
    try {
      const data = await deleteProductById(productId)
      setProducts(products.filter(p => p.id != productId))
    } catch (e) {
      console.log(e)
    }
  }

  const showAddForm = () => {
    document.querySelector('.add-form').classList.add('visible')
  }

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <h2>Products</h2>
        <div className="product-listing">
          <ProductList onDelete={handleDelete} products={products} />
        </div>
        <div className="add-form">
          <p>
            <button className="add-product-button" onClick={showAddForm}>
            Add a Product
            </button>
          </p>
          <h3>Add Product</h3>
          <AddProductForm onSubmit={handleAddProduct} />
        </div>
      </main>
    </div>
  )
}

export default App;
