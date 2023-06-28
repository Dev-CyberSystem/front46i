import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UsuariosContext = createContext() //universo. Todo lo que este aqui adentro va a tener acceso a los usuarios



// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users")
            // console.log(response, "response context")
            setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const logout = () => {
        localStorage.removeItem("user")
        window.location.href = "/login"
    }

    useEffect(() => {
        getUsuarios()
    }, [])

  return (
    <UsuariosContext.Provider value={{usuarios, setUsuarios, logout}}>
        {children}
    </UsuariosContext.Provider>
    
  )
}

export default UserContext