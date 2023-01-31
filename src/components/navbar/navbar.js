import React from 'react';
import "./navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from "../CartWidget/CartWidget"

function navbar(){
    return(
        <header>
            <h1>ShopTime</h1>
            <nav className='navbar'>
                <ul className='menu'>
                    <li>
                        <a href=''>New In</a>
                    </li>
                    <li>
                        <a href=''>Hombre</a>
                    </li>
                    <li>
                        <a href=''>Mujer</a>
                    </li>
                    <li>
                        <a href=''>Zapatillas</a>
                    </li>
                    <li>
                        <a href=''>Marcas</a>
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