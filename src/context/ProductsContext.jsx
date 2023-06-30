import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductosContext = createContext();

// eslint-disable-next-line react/prop-types
const ProductsContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //Petición a la API Http GET  ----> Obtiene info

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/products");
      setProductos(response.data);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http POST  ---> Crea info

  const addProducts = async (productos) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        productos
      );
      console.log(response, "response de productos");
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http PUT  ----> Actualiza info

  const updateProducts = async (producto) => {
    console.log(producto, "producto de context");
    try {
      await axios.put(
        `http://localhost:8080/products/${producto.id}`,
        producto
      );

      await getProducts();
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  //Petición a la API Http DELETE  ----> Elimina info

  const deleteProducts = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      const deleteProducto = productos.filter((producto) => producto.id !== id);
      setProductos(deleteProducto);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        setProductos,
        addProducts,
        deleteProducts,
        updateProducts,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductsContext;
