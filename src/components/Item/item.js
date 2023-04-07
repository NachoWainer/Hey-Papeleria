import { ItemPrice } from '../ItemPrice/ItemPrice'
import { OnSale } from '../OnSale/OnSale'

import './Item.scss'
import {Link} from "react-router-dom"

 const Item = ({item}) => {
    
    return(
        <div className="itemContainer">
            <OnSale item={item}/>
            <h4>{item.name}</h4>
            
            <div className="boxContainer">
                <img className="itemImage" src={item.img} alt={item.name}/>
                <div className='infoContainer'>
                    <p>{item.shortDesc}</p>
                    <ItemPrice item={item}/>
                    <Link to={`/detail/${item.id}`} className="verMasButton btn btn-primary">Ver más</Link>
                </div>
                
            </div>
        </div>
        
    )
}
export default Item




