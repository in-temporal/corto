import { Navbar, Container, Nav } from "react-bootstrap"
import './index.css'
import '../Home/index.css'
import { Link, useLocation } from 'react-router-dom';

const Index = ({ logo }) => {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Container>
         {location.pathname === '/corto' || location.pathname === '/corto/' ? (
          <>
            
          </>
         ) : (
          <>
          <div className='Header-menu'>
            <div>
              <Link to='/corto'><h2>Home</h2></Link>
              <Link to='/about'><h2>Quiénes somos</h2></Link>
              <Link to='/trabajos-previos'><h2>Trabajos previos</h2></Link>
              <Link to='/intemporal'><h2>Qué es In Temporal</h2></Link>
            </div>
            <div>
              <Link to='/donate'><h2>Cómo Donar</h2></Link>
              <Link to='/sponsors'><h2>Patrocinantes</h2></Link>
              <Link to='/contact'><h2>Contacto</h2></Link>
            </div>
            
          </div>
          </>
         ) }
        
      </Container>
    </>
  )
}

export default Index