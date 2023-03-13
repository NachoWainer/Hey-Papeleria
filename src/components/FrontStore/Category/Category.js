import { Link } from 'react-router-dom'
import './Category.scss'

export const Category = () => {

 
    return(
    <div className= "Category">
    <section>
        <div className ="jugueteria"><Link to={"/productos/juguetes"} className= "hero-text"><h3>JUGUETERIA</h3></Link></div>
        <div className ="papeleria"><Link to={"/productos/papeleria"} className= "hero-text"><h3>PAPELERIA</h3></Link></div>
        <div className ="tecnologia"><Link  to={"/productos/tecnologia"} className= "hero-text"><h3>TECONOLOGIA</h3></Link></div>
        <div className ="libreria"><Link to={"/productos/libros"} className= "hero-text"><h3>LIBRERIA</h3></Link></div>
   
    </section>
    </div>
    )


}