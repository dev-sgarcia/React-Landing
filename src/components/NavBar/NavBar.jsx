import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../img/florerialogoletras.png';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
   <Navbar bg="light" variant="light">
      <Container>   
      <img src={logo} className="header_logo" alt="logo" />             
        <Nav className="me-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <Nav.Link href="#arreglos">Arreglos</Nav.Link>
          <Nav.Link href="#contacto">Contácto</Nav.Link>          
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;