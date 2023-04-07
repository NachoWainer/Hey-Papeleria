
import { useEffect } from 'react'
import { useState } from 'react'
import './ItemDetailContainer.scss'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [item , setItem] = useState(null)
    const [loading,setLoading] = useState(true)
    const {itemId} =useParams()

    
    useEffect(() =>{
        setLoading(true)
        const docRef = doc(db,"productos",itemId)
        getDoc(docRef)
            .then((doc)=>{
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => setLoading(false))
    },[])
    return(
        <div>
            {
                loading ? <h2>loading...</h2> : <ItemDetail item={item}/>
            }
        </div>
    )
    


}