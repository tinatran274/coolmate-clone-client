import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import NavBar from '../../../components/nav-bar/nav_bar'
import SideBar from './side-bar'

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex h-screen">
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default AdminLayout
