import { collection, addDoc } from "firebase/firestore";
import { db } from "./config/firebaseConfig";

const agregarPedido = async (que, donde) => {
  console.log("agregar pedido", que, donde);
  const collectionRef = collection(db,donde);
  const response = await addDoc(collectionRef,que);
  console.log("response", response.id);
};

export default agregarPedido;