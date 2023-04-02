import { useEffect } from 'react'
import { useState } from 'react'
import { fetchDatos } from '../functions/fetchDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.scss'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'


export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    const [loading,setLoading] = useState(true)

    const {category} = useParams()
    
    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db,"productos")
        const q = category 
            ? query(productosRef,where("type","==",category))
            : productosRef
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc)=>{
                    return{ ...doc.data(), id: doc.id}
                })
            
            setProductos(docs)
            })
            .finally(() => {
                setLoading(false)
            })

            
    },[category] )
    
    
    

    return(
    <div>
        {
            loading ? <h2>loading..</h2> : <ItemList items={productos}/>
        }
    </div>
    )
        
       
        


}