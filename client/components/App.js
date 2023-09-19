import { useEffect, useState } from "react"

import mockData from "../mockData/data"
import ProductList from "./ProductList"
import Cart from "./Cart"

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockData);
    console.log(products);
  }, [])

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart />
      </header>
      <main>
        <ProductList products={mockData} />
      </main>
    </div>
  )
}

export default App;