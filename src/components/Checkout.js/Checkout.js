import { useState } from 'react'
import './Checkout.scss'

const Checkout = () => {
    const {cart} = useContext(CartContext)
    const  [values,setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })
    const handleInputChange = (e)=>{
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]:e.target.value
        }

        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (values.nombre.length < 3){
            alert("Nombre invalido")
            return
        }
        // validaciones
        const orden = {
            cliente : values,
            items: cart.map((prod)=>({id:prod.id,name:prod.name, price: prod.price, cantidad: prod.qty}) ),
            total: totalCompra(),
            fecha: new Date()


        }

        console.log("Submit",values)

    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>


        <form onSubmit={handleSubmit}>
            <input
            onChange={handleInputChange}
            value={values.nombre}
                type={'text'}
                placeholder='Tu nombre'
                className='Form'
                name="nombre"
            />

            <input 
            onChange={handleInputChange}
            value={values.direccion}
                type={'text'}
                placeholder='Tu dirección'
                className='Form'
                name="direccion"
            />

            <input
            onChange={handleInputChange}
            value={values.email}
                type={'email'}
                placeholder='Tu email'
                className='Form'
                name="email"
            />
            <button className="btn btn-primary" type="submit">Enviar</button>


            
        </form>


        </div>
    )
}
export default Checkout