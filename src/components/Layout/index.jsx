import Header from '../Header/index'
import Footer from '../Footer/index'

const Index = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Index