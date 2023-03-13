const ItemCount = ({tope, qty, setQty, handleAddCart}) => {

const handleAdd = () => {
    qty<tope &&  setQty(qty+1)
}
const handleSub = () => {
    qty > 1 && setQty(qty-1)
}

return(
    <div>
        <button onClick={handleSub} className="subButton">-</button>
        <p>{qty}</p>
        <button onClick={handleAdd} className="addButton">+</button>
        <button onClick={handleAddCart} className="addCartButton">Agregar al Carrito</button>

    </div>
)

}
export default ItemCount