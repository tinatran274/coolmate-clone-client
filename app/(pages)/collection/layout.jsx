import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import NavBar from '../../../components/nav-bar/nav_bar'

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
export default AuthLayout
