import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../src/service/config/firebaseConfig';

export const getProducts = async () => {
  try {
    const productosCollection = collection(db, 'productos');
    const querySnapshot = await getDocs(productosCollection);

    const productos = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      productos.push(product);
    });

    return productos;
  } catch (error) {
    throw new Error('Error al obtener los productos: ' + error.message);
  }
};

export const getProductById = async (documentId) => {
  try {
    const productDoc = doc(db, 'productos', documentId);
    const docSnapshot = await getDoc(productDoc);

    if (docSnapshot.exists()) {
      const product = docSnapshot.data();
      return product;
    } else {
      throw new Error('Producto no encontrado');
    }
  } catch (error) {
    throw new Error('Error al obtener el producto: ' + error.message);
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const productsCollection = collection(db, 'productos');
    const querySnapshot = await getDocs(productsCollection);

    const productsByCategory = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      if (product.category === categoryId) {
        productsByCategory.push(product);
      }
    });

    if (productsByCategory.length === 0) {
      throw new Error(`No se encontraron productos para la categoría ${categoryId}`);
    }

    return productsByCategory;
  } catch (error) {
    throw new Error('Error al obtener los productos por categoría: ' + error.message);
  }
};
