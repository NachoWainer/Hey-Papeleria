import './Item.scss'
import {Link} from "react-router-dom"

 const Item = ({item}) => {
    return(
    <div className="itemContainer">
        <div className='itemImageContainer'>
            <img className="itemImage" src={item.img}/>
        </div>
        <div className='itemInfoContainer'>
            <h4>{item.name}</h4>
            <p>{item.shortDesc}</p>
            <p>${item.price}</p>
        </div>
        <Link to={`/detail/${item.id}`} className="verMasButton btn btn-primary">Ver más</Link>
    </div>
        
    )


}
export default Item