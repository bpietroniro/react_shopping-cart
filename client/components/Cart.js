const Cart = ({ items, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      { items.length === 0 ?
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <button className="checkout" disabled>Checkout</button>

        </>
      :
      <>
      <table className="cart-items">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${items.reduce((total, item) => total + Number(item.price), 0)}</td>
          </tr>
        </tfoot>
      </table>
      <button className="checkout" onClick={onCheckout}>Checkout</button>
      </>
      }
    </div>
  )
}

export default Cart