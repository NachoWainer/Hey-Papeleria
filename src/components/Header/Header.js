import './Header.scss'
import { CartWidget } from "../CartWidget/CartWidget";
export const Header = () => {

    return(
        <header>
        <div>

            <div className="logo">
                <div className="logoNombre">
                    <img src='./images/bot64.png' />
                    <h1 className="title">Hey</h1>
                </div>
                <CartWidget />
            </div>

            

        </div>
    </header>
    
        
    )


}