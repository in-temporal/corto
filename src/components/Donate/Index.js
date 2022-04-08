import '../About/index.css'
import { Container } from 'react-bootstrap'


const Index = () => {
  
  return (
    <div className='About-background'>
      <Container>
        <h1>Donaciones</h1>
        <p>Puedes donar a través de las siguientes vías:</p>
        <div className='datos-container'>
          <div>
            <h4>Bolívares:</h4>
            <h6>Pago móvil:</h6>
            <p>Banesco</p>
            <p>0424-1340110</p>
            <p>CI: 27.207.713</p>
            <h6>Transferencias:</h6>
            <p>0134-0051-21-0512338737</p>
            <p>Banesco</p>
            <p>CI: 27.207.713</p>
            <p>Cristina Betancourt</p>
          </div>
          <div>
            <h4>Dólares:</h4>
              <h6>Zelle:</h6>
              <p>alessandrovaru@gmail.com</p>
              <p>Gian Alessandro Varuzza</p>
              <h6>Paypal:</h6>
              <p>gianalessandrovaru@gmail.com</p>
              <h6>Efectivo</h6>
          </div>
        </div>
        <div className='more-datos-container'>
          <h4>Comprobantes de pago y donaciones en efectivo:</h4>
          <p>+58 (424-1340110)</p>
          <p>Cristina Betancourt - Directora de Producción</p>
          <h4>El patrocinio también es una ayuda.</h4>
          <p>Si tienes una empresa o emprendimiento y deseas patrocinarnos, contáctanos a través de las siguientes vías:</p>
        </div>
      </Container>

    </div>
  )
}

export default Index