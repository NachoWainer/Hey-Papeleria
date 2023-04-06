
import "./ItemPrice.scss"



export const ItemPrice = ({item}) =>{
    return(
        
        item.discount == true ?
        <div className="discountedPrice">
        <del className="discountedOriginalPrice">${item.price}</del>
        <p className="discountedNewPrice">${item.price * (1 - item.discountPercent / 100)}</p>
        <p className="discountedPercentage">{item.discountPercent}% OFF</p>
        </div>
        :
        <p className="Originalprice">${item.price}</p>
        
    )

}