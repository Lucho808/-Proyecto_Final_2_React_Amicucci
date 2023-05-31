import './CartWidget.css'
import cart4 from './asset/cart4.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cartwidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart4} alt="cart-widget"/>
            { totalQuantity}
        </Link>
    )
}

export default Cartwidget