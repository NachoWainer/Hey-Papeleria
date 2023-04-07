import { Link } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {
    return(

        <nav className="barraBusqueda">
                    <div>
                        <Link to={"/productos/papeleria"}>Papelería<img src ="../../images/papel24.png" alt='papeleria'/></Link>
                        <Link to={"/productos/juguetes"}>Juguetes<img src ="../../images/juguetes24.png" alt='juguetes'/></Link>
                        <Link to={"/productos/libros"}>Libros<img src ="../../images/libro-abierto24.png" alt='libros'/></Link>
                        <Link to={"/productos/tecnologia"}>Tecnología<img src ="../../images/computadora24.png" alt='tecnologia'/></Link>
                    </div>

                </nav>
       



    )


}