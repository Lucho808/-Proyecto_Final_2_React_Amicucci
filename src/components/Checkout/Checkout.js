import { useContext, useState } from "react";
import { collection, addDoc, Timestamp, writeBatch, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from "../../context/CartContext";


const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [ordenId, setOrdenId] = useState('');

  const { cart, total, clearCart} = useContext(CartContext)

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true)

    try {
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items:cart,
            total: total,
            date: Timestamp.fromDate( new Date())
        }
        const batch = writeBatch(db)

        const outOfstock = []

        const ids = cart.map(prod => prod.id)

        const productsRef = collection(db, 'products')

        const productsAddedFromFirestore = await getDocs(query(productsRef, where('id', 'in', ids)))
        const { docs } = productsAddedFromFirestore

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productsAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productsAddedToCart?.quantity

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity})
            } else {
                outOfstock.push({ id:doc.id, ...dataDoc})
            }
        })

        if(outOfstock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrdenId(orderAdded.id)
            clearCart()
        } else {
            console.error('Hay productos que están fuera de stock')
        }

    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (ordenId) {
    return <h1>El ID de su orden es: {ordenId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}

export default Checkout;
