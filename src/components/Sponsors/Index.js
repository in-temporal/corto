import templo from "../../Assets/Images/templo.png"
import { Container, Image } from "react-bootstrap"
import mountain from "../../Assets/Images/logomontaña.png"
import paint from "../../Assets/Images/paint.png"

import './index.css'

const Index = () => {
  return (
    <Container>
      <Image src={templo} className='templo' />
      <Image src={mountain} className='templo' />
      <Image src={paint} className='templo' />
    </Container>
  )
}

export default Index