import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { SiOpenaigym } from 'react-icons/si';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;

    @media screen and (min-width: 350px) and (max-width: 375px) {
        height: 100px;
        margin-right: 12rem
    };
    @media screen and (min-width: 400px) and (max-width: 500px) {
        height: 100px;
        margin-right: 16rem
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    margin: 0.5rem;
    cursor: pointer;   
`;

export const NavIcon = styled.div`
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;
 p {
     transform: translate(-175%, 100%);
     font-weight: bold;
     
     @media screen and (min-width: 350px) and (max-width: 375px) {
     font-size: 1.25rem;   
    }
     @media screen and (min-width: 400px) and (max-width: 500px) {
     font-size: 1.15rem;   
    }
 }
@media screen and (min-width: 350px) and (max-width: 375px) {
        margin-top: 1rem
    };
@media screen and (min-width: 400px) and (max-width: 500px) {        
        margin-top: 1.45rem
    }
`;

export const Bars = styled(SiOpenaigym)`
    font-size: 2rem;
    transform: translate(-50%, -15%);

    @media screen and (min-width: 350px) and (max-width: 375px) {
     font-size: 2.5rem;   
    }
`
export const NavBarLogo = styled.img`
    width: 200px;
    height: 200px;

    @media screen and (min-width: 350px) and (max-width: 375px) {
    width: 185px;
    height: 185px;
    }
    @media screen and (min-width: 400px) and (max-width: 500px) {
    width: 195px;
    height: 195px;
    }
`