import React from 'react';
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navegate = useNavigate ()
    return (
        <body>
            <header className="header">
            <div className='logo' onClick={()=>navegate(`/`)}>
                <img src='src/img/logo.png' />
            </div>
        <nav className='navbar'>
            <div className='menu'>
                <Button accion={()=>navegate(`/`)} texto="inicio" className="navbar-button" />
                <Button accion={()=>navegate(`/category/Anime`)} texto="anime" className="navbar-button" />
                <Button accion={()=>navegate(`/category/Manga`)} texto="manga" className="navbar-button"/>
                <Button texto="nosotros" className="navbar-button" accion={() =>navegate(`/nosotros`)} />
            </div>
            <div className='cart'>
                <NavLink to='/cart'><CartWidget/></NavLink>
                
            </div>
        </nav>
        </header>
        </body>
        
    )
}  

export default Navbar;
