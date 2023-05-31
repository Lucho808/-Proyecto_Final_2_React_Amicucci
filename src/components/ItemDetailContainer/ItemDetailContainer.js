import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const docRef = db.collection("productos").doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
          setProduct(doc.data());
        } else {
          console.log("No existe el producto.");
        }
      } catch (error) {
        console.log("Error al obtener el producto:", error);
      }
    };

    getItem();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
