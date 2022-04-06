import { Link } from 'react-router-dom';
import './index.css';

import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

  function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  }

const index = ({ logo }) => {
  const options = {
    scale: 1.5,
    speed: 1000,
    max: 30
  };
  return (
    <>
      <div className='Home-container'>
        <div className='Home-logo-container'>
          <Tilt options={options}>
            <img src={logo} className="Home-logo" alt="logo" />
          </Tilt>
          <h2>In Temporal</h2>
        </div>
        
        <div className='Home-menu'>
          <Link to='/about'><h2>Quiénes somos -</h2></Link>
          <Link to='/intemporal'><h2>Qué es In Temporal - </h2></Link>
          <Link to='/work'><h2>Trabajos previos - </h2></Link>
          <Link to='/donate'><h2>Cómo Donar - </h2></Link>
          <Link to='/sponsors'><h2>Patrocinantes - </h2></Link>
          <Link to='/contact'><h2>Contacto</h2></Link>
        </div>
      </div>
    </>
  )
}

export default index