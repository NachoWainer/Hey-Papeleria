import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.scss"




const Cart = () => {
    const {cart, totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)
    return( cart.length === 0 ?
        <div>
            <h2>No tieness productos en el carrito</h2>
            <hr/>
            <Link to="/">Ir a comprar</Link>
        </div>
        :
        <div>
            <h2>Tu compra</h2>
            <hr/>
            {
                cart.map((prod)=> (
                    <div key = {prod.id}>
                        <h4>{prod.name}</h4>
                        <img className="cartImg" src={prod.img} alt={prod.name}/>
                        <small>precio unitario: ${prod.price}</small>
                        <small>Cantidad: {prod.qty}</small>
                        <p>Precio Total: $ {prod.price * prod.qty}</p>
                        <button  onClick={()=> eliminarDelCarrito(prod.id)}>
                            eliminar
                           
                              
                        </button>
                        <hr/>


                        </div>
                ))
            }
            <h3> Total: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to="/checkout">Terminar mi compra</Link>
        </div>

    )
}
export default Cart