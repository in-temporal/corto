import { Container } from 'react-bootstrap'
import '../About/index.css'
import'../Loader/index.css'

const index = ({ logo }) => {
  return (
    <div className="About-background">
      <div className="About-img-absolute">
        <img src={logo} className="Loader-logo" alt="logo" />
      </div>
      <Container>
        <iframe className='About-iframe' width="560" height="315" src="https://www.youtube.com/embed/ok6Q61zr56Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Container>
      <Container>
        <p>Nuestro trabajo previos realizados para la materia de Producción Cinematográfica en la UCAB</p>
      </Container>
    </div>
  )
}

export default index