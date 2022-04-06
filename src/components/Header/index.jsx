import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import './index.css'

const index = ({ logo }) => {
  return (
    <Navbar fixed="top" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand className="font-adjust" href="#home">IN TEMPORAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quiénes somos</Nav.Link>
            <Nav.Link href="#link">Qué es In Temporal</Nav.Link>
            <Nav.Link href="#link">Trabajos Previos</Nav.Link>
            <Nav.Link href="#link">Cómo Donar</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Patrocinantes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Qué es In Temporal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Holy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default index