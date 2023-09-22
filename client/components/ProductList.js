import Product from "./Product"

const ProductList = ({ products, onDelete, onUpdate }) => {
  return (
    <ul className="product-list">
      {products.map((product) => {
        return (
          <li key={product._id} className="product">
            <Product product={product} onDelete={onDelete} onUpdate={onUpdate} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProductList