import './index.css';

const index = ({ logo }) => {
  return (
    <div className="Loader-background">
      <img src={logo} className="Loader-logo" alt="logo" />
    </div>
  )
}

export default index