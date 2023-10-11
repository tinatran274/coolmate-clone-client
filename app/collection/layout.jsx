import Header from '../../components/header/header'

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
export default AuthLayout
