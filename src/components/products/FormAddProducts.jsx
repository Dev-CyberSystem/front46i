import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import Swal from "sweetalert2";

const FormAddProducts = () => {

  const { addProducts } = useContext(ProductosContext)

  const [productos, setProductos] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    img: "https://picsum.photos/200/300/?blur",
  });

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value }); // ...productos es para que no se borre lo que ya tenia
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProducts(productos)
    Swal.fire({
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 1500,
    });
    setProductos({
      name: "",
      description: "",
      price: "",
      stock: "",
      img: "https://picsum.photos/200/300/?blur",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Formulario de productos</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                value={productos.name}
                onChange={handleChange}
                className="form-control"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                name="description"
                value={productos.description}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Precio
              </label>
              <input
                type="number"
                value={productos.price}
                onChange={handleChange}
                className="form-control"
                name="price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="stock" className="form-label">
                Stock
              </label>
              <input
                type="number"
                value={productos.stock}
                onChange={handleChange}
                className="form-control"
                name="stock"
              />
            </div>
            <div className="mb-3">
              <Button variant="outline-success" type="submit">
                Agregar Productos
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormAddProducts;
