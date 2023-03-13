import './FrontStore.scss'
import {Category} from "./Category/Category"
import {HotProducts} from "./HotProducts/HotProducts"





export const FrontStore = () => {
   
    return(
    <div className= "FrontStore">
        <Category />

        <HotProducts />

       
    </div>
        
    )


}