import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ProductosContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductsContext = ({children}) => {
    const [productos, setProductos] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/products")
            setProductos(response.data)
        } catch (error) {
            console.log(error, "error de productos")
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <ProductosContext.Provider value={{productos, setProductos}}>
        {children}
    </ProductosContext.Provider>
  )
}

export default ProductsContext