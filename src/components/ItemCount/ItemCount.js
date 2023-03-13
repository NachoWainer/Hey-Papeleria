import "../ItemCount/itemCount.scss"
const ItemCount = ({tope, qty, setQty, handleAddCart}) => {

const handleAdd = () => {
    qty < tope &&  setQty(qty+1)
}
const handleSub = () => {
    qty > 1 && setQty(qty-1)
}

return(
    <div className="itemCount">
        <button onClick={handleSub} className="subButton btn btn-primary">-</button>
        <p>{qty}</p>
        <button onClick={handleAdd} className="addButton btn btn-primary">+</button>
        <button onClick={handleAddCart} className="addCartButton btn btn-primary">Agregar al Carrito</button>

    </div>
)

}
export default ItemCount