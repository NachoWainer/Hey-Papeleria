import { useEffect } from 'react'
import { useState } from 'react'
import { fetchDatos } from '../functions/fetchDatos'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.scss'


export const ItemListContainer = () => {
    const [productos,setProductos]= useState([])
    const [loading,setLoading] = useState(true)

    const {category} = useParams()
    
    useEffect(() => {
        setLoading(true)
        fetchDatos()
        .then((response)=> {
            (!category) ? setProductos(response) : setProductos(response.filter((element) => element.type === category))
        })
        .catch((error) => {
            console.log(error)
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