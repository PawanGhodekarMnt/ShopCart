// Import React library to create a functional component
import React from "react";

// Define the `Cart` component, receiving props: `cart`, `removeFromCart`, and `updateQuantity`
function Cart({ cart, removeFromCart, updateQuantity }) {
  
  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      {/* Heading for the Cart section */}
      <h2>Cart</h2>

      {/* If the cart is empty, show a message */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Table to display cart items in columns */}
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Display total number of items */}
          <h3>Total Items: {totalItems}</h3>

          {/* Display total price of items in the cart */}
          <h3>Total Price: ₹{totalPrice}</h3>
        </>
      )}
    </div>
  );
}
// Export the `Cart` component so it can be used in other files
export default Cart;
