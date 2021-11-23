import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
    

    img {
        width: 300px;
        margin: 1.5rem;
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
        
                
    }
    
`;