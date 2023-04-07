import './Header.scss'
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
export const Header = () => {

    return(
        <header>
        <div>

            <div className="logo">
                <Link to={"/"} className="logoNombre">
                    <img src='../../images/bot64.png' alt='bot logo' />
                    <h1 className="title">Hey</h1>
                </Link>
                <CartWidget />
            </div>

            

        </div>
    </header>
    
        
    )


}