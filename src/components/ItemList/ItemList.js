import Item from "../Item/item"
import { NavBar } from "../NavBar/NavBar"
import './ItemList.scss'
export const ItemList = ({items}) =>{
    return(
        <div>
               <NavBar></NavBar>
            <h2 className="titleType">{items[0].type.toUpperCase()}</h2>   
            <div className="itemListContainer">
            <div className="itemList">
                {items.map((elemento)=> 
                <Item key={elemento.id} item={elemento}/> )} 
            </div>
            </div>

            
        </div>
    )
}   
