import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.scss"




const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)
    return( cart.length === 0 ?
        <div className="carritoVacio">
            <h2>No tieness productos en el carrito</h2>
            <hr/>
            <Link className="btn btn-primary" to="/">Ir a comprar</Link>
        </div>
        :
        <div className="cartDisplay">
            <h2>Tu compra</h2>
            <hr/>
            {
                cart.map((prod)=> (
                    <div key = {prod.id}>
                        <h4>{prod.name}</h4>
                        <div className="itemInCart">
                        <img className="cartImg" src={prod.img} alt={prod.name}/>
                        <div className="cartItemInfo">
                        <small>precio unitario: ${prod.discount?((prod.price * (1 - prod.discountPercent / 100))):prod.price}</small>
                        <small>Cantidad: {prod.qty}</small>
                        <p>Precio Total: $ {
                        prod.discount ? ((prod.price * (1 - prod.discountPercent / 100)))*prod.qty
                    :
                    prod.price * prod.qty}</p>
                        <button className="btn btn-warning"  onClick={()=> eliminarDelCarrito(prod.id)}>
                            eliminar
                           
                              
                        </button>
                        </div>
                        </div>
                        <hr/>


                        </div>
                ))
            }
            
            <h3> Total: ${totalCompra().toFixed(2)}</h3>
            <div className="carritoOpt">
                <button className="vaciarCarrito btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link className="terminarCompra btn btn-success" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>

    )
}
export default Cart