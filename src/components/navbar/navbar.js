import React from 'react';
import "./navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'

function navbar(){
    return(
        <header>
            <h1>ShopTime</h1>
            <nav className='navbar'>
                <ul className='menu'>
                    <li>
                        <Link to={'/category/NewIn'}>
                            New In
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Hombre'}>
                            Hombre
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Mujer'}>
                            Mujer
                        </Link>
                    </li>
                    <li>
                    <Link to={'/category/Zapatillas'}>
                            Zapatillas
                        </Link>
                    </li>
                    <li>
                        <Link to={'/category/Marcas'}>
                            Marcas
                        </Link>
                    </li>
                </ul>
            </nav>
            
            <section>
                <CartWidget/>
                <PersonIcon fontSize="large"/>
            </section>
        </header>
    );
};

export default navbar;