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
    console.log(toggle, 'this is toggle log')
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