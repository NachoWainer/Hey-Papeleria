import './ItemDetail.scss'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


 const ItemDetail = ({item}) =>{
    const [qty,setQty] = useState(1)
    const navigate = useNavigate()
    const handleGoBack = () => {navigate(-1)}
    const handleAddCart = () => {
        const newItem = {
            ...item,
            qty
            
        }
    console.log(newItem)}

    return(
        <div>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name}/>
            <p>{item.desc}</p>
            <p>${item.price}</p>

            <ItemCount
                tope = {item.stock}
                qty = {item.qty}
                setQty = {setQty}
                handleAddCart ={handleAddCart} />
        <button onClick={handleGoBack} className="returnButton">Volver</button>

        </div>
    )
}   
export default ItemDetail
