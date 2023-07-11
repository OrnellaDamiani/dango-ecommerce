import React from 'react';
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <body>
            <header class="header">
            <div className='logo'>
                <img src='src/img/logo.png' />
            </div>
        <nav className='navbar'>
            <div className='menu'>
                <Button texto="inicio" className="navbar-button" accion={() => console.log("Clickeaste Inicio")} />
                <Button texto="anime" className="navbar-button" accion={() => console.log("Clickeaste Anime")} />
                <Button texto="manga" className="navbar-button" accion={() => console.log("Clickeaste Manga")} />
                <Button texto="contacto" className="navbar-button" accion={() => console.log("Clickeaste Contacto")} />
            </div>
            <div className='cart'>
                <CartWidget />
            </div>
        </nav>
        </header>
        </body>
        
    )
}  

export default Navbar;
