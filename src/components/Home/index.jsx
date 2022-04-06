import './index.css';

const index = ({ logo }) => {
  return (
    <>
      <div className='Home-container'>
        <div className='Home-logo-container'>
          <img src={logo} className="Home-logo" alt="logo" />
        </div>
        <div className='Home-menu'>
          <h2>Quiénes somos</h2>
          <h2>Qué es In Temporal</h2>
          <h2>Trabajos previos</h2>
          <h2>Cómo Donar</h2>
          <h2>Patrocinantes</h2>
          <h2>Contacto</h2>
        </div>
      </div>
    </>
  )
}

export default index