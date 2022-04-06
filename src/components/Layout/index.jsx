import Header from '../Header/index'
import Footer from '../Footer/index'

const Index = ({ children, navigate }) => {
  return (
    <>
      <Header navigate={navigate} />
        {children}
      <Footer />
    </>
  )
}

export default Index