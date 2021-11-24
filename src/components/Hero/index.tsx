import { useState } from 'react'
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {
    HeroContainer,
} from './style'


export interface SideBarProps {
    isOpen: boolean;
    toggle: () => void;
}

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle}/>
        </HeroContainer>
    );
};

