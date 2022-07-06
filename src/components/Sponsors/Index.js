import templo from "../../Assets/Images/templo.png"
import { Container, Image } from "react-bootstrap"
import mountain from "../../Assets/Images/logomontaña.png"
import paint from "../../Assets/Images/paint.png"
import redblu from "../../Assets/Images/redblu.png"
import jvg from "../../Assets/Images/jvg.png"
import kobe from "../../Assets/Images/kobe.png"
import paintball from "../../Assets/Images/212.jpeg"
import ridery from "../../Assets/Images/ridery.png"
import area from "../../Assets/Images/laser.jpg"
import virtus from "../../Assets/Images/virtus.png"
import vendo from "../../Assets/Images/vendo.jpg"

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
      <Image src={ridery} className='templo' />
      <Image src={area} className='templo' />
      <Image src={virtus} className='templo' />
      <Image src={vendo} className='templo' />
    </Container>
  )
}

export default Index