import React from 'react';
import {NavLink} from 'react-router-dom';

const Portifolio = (props) =>(
    <div>
        <h1>My Work</h1>
        <p>Checkout the folowing things I´ve done..</p>
        <NavLink className="header-link" activeClassName="is-active" to="/portifolio/1">
        Item 1</NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/portifolio/2">
        Item 2</NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/portifolio/3">
        Item 3</NavLink>
    </div>
);

export default Portifolio;

// <NavLink activeClassName="is-active" to="/edit">Edit Expense   </NavLink>