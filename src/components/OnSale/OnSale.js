
import './OnSale.scss'


 export const OnSale = ({item}) => {
    return(
        item.discount == true ? 
        <img className='onSale' src="../../images/sale64.png" alt="On Sale"/>
        :
        <div></div>
        
    )
}
