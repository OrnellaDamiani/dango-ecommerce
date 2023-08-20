import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";
import { CartContext } from "../../Context/CartContext";

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, total, clear } = useContext(CartContext)
    const purchaserData = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value

        })
    }
    const finishPurchase = (e) => {
        e.preventDefault()
        if (!user.name && !user.phone && !user.adress) {
            alert('Hay campos vacios')
        } else {
            let order = {
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
            const purchase = collection(db, "orders")
            addDoc(purchase, order)
                .then((res) => {
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))

        }

    }
    return (
        <div>
            {orderId !== ''
                ? <div className="finishorder-container">
                    <h2 className="finish-order">¡Felicitaciones tu orden se genero con exito!</h2>
                    <h5 className="order-id">Su numero de orden es: {orderId} te mandaremos un mail pronto.</h5>
                    <Link to='/' className="btn-backmain">Volver al inicio</Link>
                </div>
                : <div className="body">
                    <h2 className="finish-text">Finalzar pedido</h2>
                    <h3 className="form-text">Porfavor completar con tus datos:</h3>

                    <div className="contenedor">
                        <div className="imagen">
                            <img src="https://i.postimg.cc/7hvxn4bN/logo.png" alt='logo de la marca'></img>
                        </div>
                        <div>
                            <form className="form" onSubmit={finishPurchase}>
                                <input type="text" className="input" onChange={purchaserData} placeholder="Nombre Completo" name="name"></input>
                                <input type="text" className="input" onChange={purchaserData} placeholder="Direccion" name="adress"></input>
                                <input type="number" className="input" onChange={purchaserData} placeholder="Telefono" name="phone"></input>
                                <input type="email" className="input" onChange={purchaserData} placeholder="Email" name="mail"></input>
                                <input type="email" className="input" onChange={((e) => setValidateEmail(e.target.value))} placeholder="Repetir Email" name="mail"></input>

                                <div className="btn-contenedor" type="submit">
                                    <Link to='/cart' className="btn-backtocart">Volver</Link>
                                    <button className="btn-send" disabled={validateEmail !== user.mail}>Enviar</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>



            }

        </div>


    )
}

export default Checkout;