import { Container } from 'react-bootstrap'
import '../About/index.css'

const index = ({ logo }) => {
  return (
    <div className="About-background">
      <div className="About-img-absolute">
        <img src={logo} className="Loader-logo" alt="logo" />
      </div>
      <h2>¿Qué es In Temporal?</h2>
      <Container>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gaafiHeJ88w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Container>
      <Container>
        <p>Un par de adolescentes irrumpen en una mansión abandonada. Al explorar el interior, descubren que la casa se distorsiona y el chico queda atrapado en una habitación. Mientras la chica intenta ayudarlo a salir, observa que el tiempo cambia y que en la casa habitan sus versiones futuras.</p>
      </Container>
    </div>
  )
}

export default index