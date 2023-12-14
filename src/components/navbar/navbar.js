import React from 'react';
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

function navbar(){
    return(
        <header>
            <NavLink className='titulo' to={'/'}><h1>freeShop</h1></NavLink>
            <nav className='navbar'>
                <ul className='menu'>
                    <li>
                        <NavLink activeclassname="active" to={'/category/Hombre'}>
                            Hombre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={'/category/Mujer'}>
                            Mujer
                        </NavLink>
                    </li>
                    <li>
                    <NavLink activeclassname="active" to={'/category/Zapatillas'}>
                            Zapatillas
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            <section>
                    <Link className='toCart' to={'/cart'}><CartWidget/></Link>
            </section>
        </header>
    );
};

export default navbar;