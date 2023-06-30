import { useContext, useState } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import { Table, Button, Modal } from "react-bootstrap";
import UpdateFormProducts from "./UpdateFormProducts";

const TableProducts = () => {
  const { productos, deleteProducts } = useContext(ProductosContext);
  const [show, setShow] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    console.log(id);
    deleteProducts(id);
  };

  const handleEdit = (producto) => {
    setEditProduct(producto);
    setShow(true);
  };

  return (
    <>
      <h4>Tabla Productos</h4>

      {productos.length === 0 ? (
        "no hay productos en stock"
      ) : (
        <>
          <Table responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            {productos.map((producto) => (
              <tbody key={producto.id}>
                <tr>
                  <td>{producto.name}</td>
                  <td>{producto.description}</td>
                  <td>{producto.price}</td>
                  <td>{producto.stock}</td>
                  <td>{producto.img}</td>
                  <td>
                    <Button
                      variant="warning"
                      className="m-1"
                      onClick={() => handleEdit(producto)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      className="m-1"
                      onClick={() => handleDelete(producto.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Editar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UpdateFormProducts
                editProduct={editProduct}  
                handleClose={handleClose}            
              />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default TableProducts;
