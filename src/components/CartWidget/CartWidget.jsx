import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div className="cart-widget">
            <img src="https://i.postimg.cc/TYVPQKV5/cart2.png" />
            <div>
              { cartQuantity() > 0 && <p className="cart-number">{cartQuantity()}</p>}
            </div>
        </div>

    )
}

export default CartWidget;  