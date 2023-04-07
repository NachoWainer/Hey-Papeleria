import { useContext } from 'react'
import './CartWidget.scss'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)
    return(
    <Link to="/cart" className= "carrito">

        <img src='../../images/carrito-de-compras32.png' alt='carrito de compras'/>
        <p id="ContadorCarrito">{totalCantidad()}</p>
        
    </Link>
        
    )


}