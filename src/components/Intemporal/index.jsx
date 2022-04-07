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
        <iframe className='About-iframe' src="https://www.youtube.com/embed/3XTJc-_F61Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Container>
      <Container>
      <p>Un par de adolescentes enamorados irrumpen en una mansión abandonada. Al explorar el interior, descubren que la casa se distorsiona y el chico queda atrapado en una habitación. Mientras la chica intenta ayudarlo a salir, alrededor de la casa habitan sus versiones futuras que reflejan sus complejos, sueños y miedos a lo largo de sus vidas.</p>
      </Container>
    </div>
  )
}

export default index