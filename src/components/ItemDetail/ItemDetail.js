import './ItemDetail.scss'
import { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../context/CartContext'



 const ItemDetail = ({item}) =>{
    const{agregarAlCarrito, isInCart} = useContext(CartContext)
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    const handleGoBack = () => {navigate(-1)}
    const handleAddCart = () => {
        const newItem = {
            ...item,
            qty
            
        }
    agregarAlCarrito(newItem)}

    return(
        <div className="itemDetailBox">
            <h2>{item.name}</h2>
            <div className='itemDetail'>
                    <img className='imgDetail' src={item.img} alt={item.name}/>
                    <div className= "itemDesc">
                        <div>
                            <p>{item.description}</p>
                            
                        </div>
                        <div>
                        <p className='price'>${item.price}</p>
                        
                        {
                isInCart(item.id) ? 
                <Link to="/cart"> Terminar Compra</Link>
                :
                <ItemCount
                            tope = {item.stock}
                            qty = {qty}
                            setQty = {setQty}
                            handleAddCart ={handleAddCart} />
            }
                    </div>
                    </div>
            </div>
            
            <button onClick={handleGoBack} className="returnButton btn btn-primary">Volver</button>
            
        </div>

    )
    
}   
export default ItemDetail
