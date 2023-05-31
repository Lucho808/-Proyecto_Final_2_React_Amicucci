import React from "react";

const ItemDetail = ({ product }) => {
  const { name, img, price, stock } = product;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>Precio: {price}</p>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ItemDetail;
