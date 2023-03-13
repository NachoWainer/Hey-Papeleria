import './Item.scss'
import {Link} from "react-router-dom"

 const Item = ({item}) => {
    return(
    <div className="itemContainer">
        <div>
            <img className="itemImage" src={item.img}/>
        </div>
        <h4>{item.name}</h4>
        <p>{item.desc}</p>
        <p>${item.price}</p>
        <Link to={`/detail/${item.id}`} className="boton">Ver más</Link>
    </div>
        
    )


}
export default Item