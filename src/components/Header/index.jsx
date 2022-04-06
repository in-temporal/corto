import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import './index.css'
import { Link, useLocation } from 'react-router-dom';

const Index = ({ logo }) => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <Navbar fixed="top" bg="transparent" expand="lg">
      <Container>
         {location.pathname === '/' ? (
          <>
            
          </>
         ) : (
          <>
          <Navbar.Brand className="font-adjust" href="#home">IN TEMPORAL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to='/' >Home</Link>
                <Link className="nav-link" to='/about' >Quiénes somos</Link>
                <Link className="nav-link" to='/intemporal' >Qué es In Temporal</Link>
                <Link className="nav-link" to='/work' >Trabajos previos</Link>
                <Link className="nav-link" to='/donate' >Cómo Donar</Link>
                <Link className="nav-link" to='/sponsors' >Patrocinantes</Link>
                <Link className="nav-link" to='/contact' >Contacto</Link>
              </Nav>
            </Navbar.Collapse>
          </>
         ) }
        
      </Container>
    </Navbar>
  )
}

export default Index