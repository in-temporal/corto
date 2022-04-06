import './index.css'

const index = ({ logo }) => {
  return (
    <div className="About-background">
      <div className="About-img-absolute">
        <img src={logo} className="Loader-logo" alt="logo" />
      </div>
      <h2>¿Quiénes somos?</h2>
      
      <div className='profile-container'>
        <div className='img-container'>
          <div className='img-profile-fredo'>
          </div>
          <h4>Freddy Perdomo</h4>
          <h5>Director</h5>
        </div>
        <div className='img-container'>
          <div className='img-profile-cris'>
          </div>
          <h4>Cristina Betancourt</h4>
          <h5>Directora de producción</h5>
        </div>
        <div className='img-container'>
          <div className='img-profile-yola'>
          </div>
          <h4>Yolanda Bastos</h4>
          <h5>Asistente de dirección</h5>
        </div>
        <div className='img-container'>
          <div className='img-profile-omar'>
          </div>
          <h4>Omar Fernández</h4>
          <h5>Script</h5>
        </div>
      </div>
    </div>
  )
}

export default index