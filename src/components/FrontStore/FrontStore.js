import './FrontStore.scss'
import {Category} from "./Category/Category"
import {HotProducts} from "./HotProducts/HotProducts"
import { StoreHeader } from './StoreHeader/StoreHeader'
import { StoreSlogan } from './StoreSlogan/StoreSlogan'





export const FrontStore = () => {
   
    return(
    <div className= "FrontStore">
        <StoreHeader/>
        <Category />
        <StoreSlogan/>
        <HotProducts />

       
    </div>
        
    )


}