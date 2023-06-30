import { Route, Routes as Ruta } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import FormAddProducts from "../components/products/FormAddProducts";
import Tienda from "../pages/tienda/Tienda";
import Administracion from "../pages/administracion/Administracion";

const Routes = () => {
  return (
    <>
      <Ruta>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/addProductos" element={<FormAddProducts />} />
        <Route path="/tienda" element={<Tienda /> } />
        <Route path="/admin" element={<Administracion /> } />
      </Ruta>
    </>
  );
};

export default Routes;
