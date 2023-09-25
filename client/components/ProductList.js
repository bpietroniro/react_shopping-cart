import Product from "./Product"

const ProductList = ({ products, onDelete, onUpdate, onAdd }) => {
  return (
    <ul className="product-list">
      {products.map((product) => {
        return (
          <li key={product._id} className="product">
            <Product product={product} onDelete={onDelete} onUpdate={onUpdate} onAdd={onAdd} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProductList