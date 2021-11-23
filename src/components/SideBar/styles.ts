import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;

    img {
        width: 250px;
        fill: black;

    }
    
    @media screen and (max-width:400px) {
        width: 100%;
    }
`;

export const Content = styled.main`
`

// left: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};