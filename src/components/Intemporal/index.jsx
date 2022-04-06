import '../About/index.css'

const index = ({ logo }) => {
  return (
    <div className="About-background">
      <div className="About-img-absolute">
        <img src={logo} className="Loader-logo" alt="logo" />
      </div>
      <h2>¿Qué es In Temporal?</h2>
      <iframe className='About-iframe' width="560" height="315" src="https://www.youtube.com/embed/3XTJc-_F61Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Conoce nuestra historia y ¡apóyanos! 

        Además de las donaciones, también puedes ayudarnos a través de patrocinio.

        </p>
    </div>
  )
}

export default index