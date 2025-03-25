// Import React and useState (hook for managing state)
import React, { useState } from "react"; 
// Import ProductList component (Displays available products)
import ProductList from "./components/ProductList"; 
// Import Cart component (Displays the cart with added items)
import Cart from "./components/Cart"; 
// Import CSS file for styling the application
import "./styles/styles.css"; 
// Define the App component (Parent component that manages everything)
function App() { 
  // useState([]) initializes the cart state as an empty array
  const [cart, setCart] = useState([]);

  /* Function: addToCart - Adds a product to the cart
   - If the product exists, increase its quantity
   - If it does not exist, add it to the cart with quantity 1  */
  const addToCart = (product) => {    // Check if the product already exists in the cart
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {             // If product exists, update its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Copy item and increase quantity
            : item
        )
      );
    } else {         // If product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
   
  //Function: removeFromCart - Removes a product from the cart based on its ID
  const removeFromCart = (id) => {         
    // Filter out the item that matches the given id
    setCart(cart.filter((item) => item.id !== id));
  };
 
  //Function: updateQuantity- Updates the quantity of a specific item in the cart  
  const updateQuantity = (id, quantity) => {
    const currentItem = cart.find((item) => item.id === id);
    
    // If the input is empty (null or ''), show a confirmation alert
    if (isNaN(quantity)) {
      const confirmDelete = window.confirm("Quantity is empty! Do you want to remove this item?");
      
      if (confirmDelete) {
        removeFromCart(id); // Remove item from cart
      } else {
        alert("Quantity cannot be empty. Setting to previous value.");
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, quantity: currentItem.quantity } : item
          )
        );
      }
      return; // Stop execution
    }
    
    // Map through the cart and update the quantity of the matching item
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // JSX (UI of the App)
  return (
    <div>
      {/* Application title */}
      <h1>Shopping Cart</h1>

      {/* Product List Component - Passing addToCart function as a prop */}
      <ProductList addToCart={addToCart} />

      {/* Cart Component - Passing cart state, removeFromCart, and updateQuantity as props */}
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
}

// Export the App component so it can be used in index.js
export default App;