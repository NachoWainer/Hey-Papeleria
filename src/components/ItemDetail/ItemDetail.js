import './ItemDetail.scss'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


 const ItemDetail = ({item}) =>{
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    const handleGoBack = () => {navigate(-1)}
    const handleAddCart = () => {
        const newItem = {
            ...item,
            qty
            
        }
    console.log(newItem)}

    return(
        <div className="itemDetailBox">
            <h2>{item.name}</h2>
            <div className='itemDetail'>
                    <img className='imgDetail' src={item.img} alt={item.name}/>
                    <div className= "itemDesc">
                        <div>
                            <p>{item.desc}</p>
                            
                        </div>
                        <div>
                        <p className='price'>${item.price}</p>
                        
                        <ItemCount
                            tope = {item.stock}
                            qty = {qty}
                            setQty = {setQty}
                            handleAddCart ={handleAddCart} />
                    </div>
                    </div>
            </div>
            <button onClick={handleGoBack} className="returnButton btn btn-primary">Volver</button>
            
        </div>
    )
}   
export default ItemDetail
