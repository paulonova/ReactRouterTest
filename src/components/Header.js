import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>(
    <header>
        <h1>Portifolio</h1>
        <NavLink className="header-link" activeClassName="is-active" to="/" exact={true}>
        Home</NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/portifolio">
        Portifolio</NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/contact">
        Contact</NavLink>
    </header>
);

export default Header;


// <NavLink activeClassName="is-active" to="/edit">Edit Expense            </NavLink>