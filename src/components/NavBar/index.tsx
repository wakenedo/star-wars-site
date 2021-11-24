import React from 'react';
import {
    Bars,
    Nav,
    NavIcon,
    NavLink
} from './style'

export const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Star Wars</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
        </Nav>
        </>
    )

}