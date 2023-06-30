
import { useState, useContext } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { ProductosContext } from '../../context/ProductsContext'


// eslint-disable-next-line react/prop-types
const UpdateFormProducts = ({editProduct, handleClose}) => {
    const [producto, setProducto] = useState(editProduct)

    const {updateProducts} = useContext(ProductosContext)

    // eslint-disable-next-line react/prop-types
    
    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        updateProducts(producto)
        handleClose()
    }


  return (
    <Container>
      <Row>
        <Col>
          <h1>Formulario de productos</h1>
          <form onSubmit={handleEdit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                value={producto.name}
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
                value={producto.description}
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
                value={producto.price}
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
                value={producto.stock || ""}
                onChange={handleChange}
                className="form-control"
                name="stock"
              />
            </div>
            <div className="mb-3">
              <Button variant="outline-success" type="submit">
                Editar Producto
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default UpdateFormProducts