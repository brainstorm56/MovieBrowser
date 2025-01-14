import Navbar from './components/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout