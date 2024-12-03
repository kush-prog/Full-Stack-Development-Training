import './MainLayout.css'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <h2>Welcome to Home Page</h2>

      <nav>
        
        <ul className='aa'>
        
            <li>
                <Link to="/login">LOGIN</Link>
            </li>
            <li>
                <Link to="/registration">REGISTRATION</Link>
            </li>
        
        
        </ul>
      
      </nav>

      <Outlet/>
    </div>
  )
}

export default MainLayout
