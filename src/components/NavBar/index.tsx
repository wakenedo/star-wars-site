import {
    Bars,
    Nav,
    NavIcon,
    NavLink,
    NavBarLogo
} from './style'

import NavBarLogoSVG from '../../assets/StarWarsLogo/star-wars-logo.svg'

interface NavBarProps {
    toggle: () => void;
}

export const NavBar = ({ toggle } : NavBarProps ) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <NavBarLogo src={NavBarLogoSVG}/>
                </NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
        </Nav>
        </>
    )

}