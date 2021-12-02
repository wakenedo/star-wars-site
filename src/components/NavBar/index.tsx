import {
    Bars,
    Nav,
    NavIcon,
    NavLink
} from './style'

interface NavBarProps {
    toggle: () => void;
}

export const NavBar = ({ toggle } : NavBarProps ) => {
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