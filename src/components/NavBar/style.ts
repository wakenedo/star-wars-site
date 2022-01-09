import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { SiOpenaigym } from 'react-icons/si';  

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

 p {
     transform: translate(-175%, 100%);
     font-weight: bold;
 }
`;

export const Bars = styled(SiOpenaigym)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`
export const NavBarLogo = styled.img`
    width: 200px;
    height: 200px
`