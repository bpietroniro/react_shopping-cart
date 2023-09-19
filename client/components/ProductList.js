import Product from "./Product"

const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map(({ id, title, price, quantity }) => {
        return (
          <li className="product">
            <Product key={id} title={title} price={price} quantity={quantity} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProductList