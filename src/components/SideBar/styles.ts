import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: 0;
    // right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    
    .sideBarLogo {
        margin-top: 4.5rem
    }

    img {
        width: 250px;
    }
    
    @media screen and (max-width:400px) {
        width: 100%;
    }
`


export const SidebarMenu = styled.div`
    margin-top: 8.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width:480px) {
        grid-template-rows: repeat(3, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;
    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
        
    }

    img {
        width: 40px;
        margin-right: 0.5rem;
        
                
    }
`;

export const CloseIcon = styled(AiOutlineClose)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarRoute = styled.div`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`