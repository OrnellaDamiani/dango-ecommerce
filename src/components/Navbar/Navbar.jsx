import React from 'react';
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <body>
            <header class="header">
            <div className='logo' as={NavLink} to='/'>
                <img src='src/img/logo.png' />
            </div>
        <nav className='navbar'>
            <div className='menu'>
                <Button texto="inicio" className="navbar-button"  as={NavLink} to='/' />
                <Button texto="anime" className="navbar-button" as={NavLink} to='/category/Anime' />
                <Button texto="manga" className="navbar-button" as={NavLink} to='category/Manga' />
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
