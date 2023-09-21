import Product from "./Product"

const ProductList = ({ products, onDelete }) => {
  return (
    <ul className="product-list">
      {products.map(({ _id, title, price, quantity }) => {
        return (
          <li key={_id} className="product">
            <Product id={_id} title={title} price={price} quantity={quantity} onDelete={onDelete} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProductList