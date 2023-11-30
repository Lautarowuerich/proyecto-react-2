import React from 'react';
import "./navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'

function navbar(){
    return(
        <header>
            <NavLink className='titulo' to={'/'}><h1>freeShop</h1></NavLink>
            <nav className='navbar'>
                <ul className='menu'>
                    <li>
                        <NavLink activeclassname="active" to={'/category/NewIn'}>
                            New In
                        </NavLink>
                    </li>
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
                    <li>
                        <NavLink activeclassname="active" to={'/category/Marcas'}>
                            Marcas
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
            <section>
                <Link to={'/cart'}>
                <CartWidget/>
                </Link>
                <PersonIcon fontSize="large"/>
            </section>
        </header>
    );
};

export default navbar;