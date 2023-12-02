import Footer from '../../../components/footer/footer'
import Header from '../../../components/header/header'
import NavBar from '../../../components/nav-bar/nav_bar'
import SideBar from './side-bar'

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex h-full ">
        <SideBar />
        <div className="overflow-auto w-full h-screen">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default AdminLayout
