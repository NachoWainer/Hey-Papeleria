import Item from "../Item/Item"
import { NavBar } from "../NavBar/NavBar"

export const ItemList = ({items}) =>{
    
    return(
        <div>
               <NavBar></NavBar>
            <div>
                {items.map((elemento)=> 
                <Item key={elemento.id} item={elemento}/> )} 
            </div>

            
        </div>
    )
}   
