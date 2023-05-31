import './CartItem.css'
import React, { useState } from 'react';

const CartItem = ({ id, name, category, description, price, quantity }) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (e) => {
    setItemQuantity(Number(e.target.value));
  };

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <input
        type="number"
        value={itemQuantity}
        onChange={handleQuantityChange}
        min="1"
      />
    </div>
  );
};

export default CartItem;