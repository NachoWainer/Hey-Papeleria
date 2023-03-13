
import { useEffect } from 'react'
import { useState } from 'react'
import './ItemDetailContainer.scss'
import { fetchDatos, fetchPorId } from '../functions/fetchDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {

    const [item , setItem] = useState(null)
    const [loading,setLoading] = useState(true)
    const {itemId} =useParams()
    
    useEffect(() =>{
        setLoading(true)
        fetchPorId(Number(itemId))
        .then((resp) => {
            setItem(resp)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    return(
        <div>
            {
                loading ? <h2>loading...</h2> : <ItemDetail item={item}/>
            }
        </div>
    )
    


}