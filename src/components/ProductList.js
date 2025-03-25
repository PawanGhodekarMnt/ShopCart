import React from "react";
// Import the hardcoded products array from the `products.js` file
import products from "../data/products"; 

// Define the `ProductList` component, receiving `addToCart` as a prop
function ProductList({ addToCart }) {
  return (
    <div>
      {/* Heading for the Products section */}
      <h2>Products</h2>
      
      {/* Unordered list to display product items */}
      <ul>
        {/* Map through the `products` array to display each product */}
        {products.map((product) => (
          <li key={product.id}>
            {/* Display product name and price */}
            {product.name} Price : ₹{product.price} 
            {/*<img src={product.image}/>*/} 
            
            {/* Add to Cart button: Calls `addToCart` with the selected product when clicked */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the `ProductList` component so it can be used in other files
export default ProductList;
