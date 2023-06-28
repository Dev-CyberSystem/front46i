import { useContext } from "react";
import { UsuariosContext } from "../../context/userContext";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const { logout } = useContext(UsuariosContext);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {user ? (
            <Navbar.Brand href="#home">Bienvenido {user.nombre}</Navbar.Brand>
          ) : (
            "Logueate Bobo"
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>

              {user ? (
                <Nav.Link href="/login" onClick={logout}>
                  Logout
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link href="/registro">Registro</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}

              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/addProductos">Agregar Producto</NavDropdown.Item>
                <NavDropdown.Item href="/tienda">
                  Tienda
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
