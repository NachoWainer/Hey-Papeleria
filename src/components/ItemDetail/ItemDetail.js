import './ItemDetail.scss'
import { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from '../../context/CartContext'
import { ItemPrice } from '../ItemPrice/ItemPrice'



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
        <div className='itemDetailComponent'>
            <div className="itemDetailBox">
                <h2>{item.name}</h2>
                <div className='itemDetail'>
                    <div className='itemDetailImgBox'>
                        <img className='imgDetail1' src={item.img} alt={item.name}/>
                        <img className='imgDetail2' src={item.img} alt={item.name}/>
                        <img className='imgDetail3' src={item.img} alt={item.name}/>

                    </div>
                        <div className= "itemDesc">
                            <div className="itemDescText">
                                <p>{item.description}</p>
                                
                            </div>
                            <div  className="itemPriceBox">
                            
                            <ItemPrice item={item}/>
                            
                            {
                    isInCart(item.id) ? 
                    <Link className="terminarCompra btn btn-primary" to="/cart"> Terminar Compra</Link>
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
        </div>

    )
    
}   
export default ItemDetail