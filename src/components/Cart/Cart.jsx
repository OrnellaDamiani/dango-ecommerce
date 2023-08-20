import React, { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const { cart, clear, total } = useContext(CartContext)
    return (
        <div>
            
            {cart.length
                ? 
                    <div>
                    <ul className='item-bar'>
                    <p className='text-bar'></p>
                    <p className='text-bar'>Nombre</p>
                    <p className='text-bar'>Precio</p>
                    <p className='text-bar'>Cantidad</p>
                    <p className='text-bar'>Subtotal</p>
                    <p></p>
                    </ul>

                    {cart.map((item) => <CartItem key={item.id} item={item} />)}
                    <p className="totalprice-text">Total a pagar ${total()}</p>
                    <div>
                        <button onClick={clear} className="btn-cleancart">Vaciar carrito</button>
                        <Link className="btn-completeorder" to='/checkout'>Finalizar compra</Link>

                    </div>
                </div>
                : <div>
                    <h3 className="cartpage-text"> tu carrito está vacío :c </h3>
                    <Link to='/' className="btn-backtomain">Ir al Inicio</Link>
                </div>
            }
        </div>
    )
}

export default Cart;