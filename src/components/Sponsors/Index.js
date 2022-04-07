import templo from "../../Assets/Images/templo.png"
import { Container, Image } from "react-bootstrap"

import './index.css'

const Index = () => {
  return (
    <Container>
      <Image src={templo} className='templo' />
    </Container>
  )
}

export default Index