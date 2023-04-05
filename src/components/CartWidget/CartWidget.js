import { useContext } from 'react'
import './CartWidget.scss'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const {cart, totalCantidad} = useContext(CartContext)
    return(
    <Link to="/cart" className= "carrito">

        <img src='../../images/carrito-de-compras32.png'/>
        <p id="ContadorCarrito">{totalCantidad()}</p>
        
    </Link>
        
    )


}