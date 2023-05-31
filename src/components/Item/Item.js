import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const Item = ({ id }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const docRef = doc(db, "items", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          setItem(docSnapshot.data());
        } else {
          console.log("No existe el item.");
        }
      } catch (error) {
        console.log("Error al obtener el item:", error);
      }
    };

    getItem();
  }, [id]);

  if (!item) {
    return <p>Cargando...</p>;
  }

  const { name, img, price, stock } = item;

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
    </article>
  );
};

export default Item;

