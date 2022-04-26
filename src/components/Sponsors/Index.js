import templo from "../../Assets/Images/templo.png"
import { Container, Image } from "react-bootstrap"
import mountain from "../../Assets/Images/logomontaña.png"
import paint from "../../Assets/Images/paint.png"
import redblu from "../../Assets/Images/redblu.png"
import jvg from "../../Assets/Images/jvg.png"
import kobe from "../../Assets/Images/kobe.png"
import paintball from "../../Assets/Images/212.jpeg"

import './index.css'

const Index = () => {
  return (
    <Container>
      <Image src={templo} className='templo' />
      <Image src={mountain} className='templo' />
      <Image src={paint} className='templo' />
      <Image src={redblu} className='templo' />
      <Image src={jvg} className='templo' />
      <Image src={kobe} className='templo' />
      <Image src={paintball} className='templo' />
    </Container>
  )
}

export default Index