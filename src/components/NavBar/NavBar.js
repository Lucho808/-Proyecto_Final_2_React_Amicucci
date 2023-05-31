import './NavBar.css'
import Cartwidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Mi primer app</h3>
            </Link>
            <div className='Categories'>
                <Link to="/cart"  className='Option'>Ir al carrito</Link>
                <NavLink to={`/categoria/Superheroe`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Superheroe</NavLink>
                <NavLink to={`/categoria/Dragonball`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Dragonball</NavLink> 
                <NavLink to={`/categoria/Caballero de zodiaco`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Caballero de zodiaco</NavLink>
            </div>
            <Cartwidget />
        </nav>
    )
}

export default NavBar