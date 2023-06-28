import { useContext } from "react";
import { ProductosContext } from "../../context/ProductsContext";
import { Card, Button } from "react-bootstrap";

const CardProducts = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <>
      <div className="m-1 d-flex flex-row">
        {productos === undefined
          ? "No hay productos en la tienda"
          : productos.map((producto) => (
              <>
                <Card key={producto.id} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={producto.img} />
                  <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>Precio: {producto.price}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </>
            ))}
      </div>
    </>
  );
};

export default CardProducts;
