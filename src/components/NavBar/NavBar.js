import './NavBar.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CartWidget } from "../CartWidget/CartWidget";
export const NavBar = () => {
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
                
                <Form className="buscador">
                    <Form.Control type="text" id="buscadorBarra" placeholder='Encuentra lo que necesites'/> 
                    <Button variant='primary' size='sm' id="buscadorBoton"> Buscar</Button>{' '}
                </Form>

                <nav className="barraBusqueda">
                    <div>
                        <a href="">Papelería<img src ="./images/papel24.png"/></a>
                        <a href="">Juguetes<img src ="./images/juguetes24.png"/></a>
                        <a href="">Libros<img src ="./images/libro-abierto24.png"/></a>
                        <a href="">Tecnología<img src ="./images/computadora24.png"/></a>
                    </div>

                </nav>

            </div>


        </header>



    )


}