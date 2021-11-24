import React, { useState } from 'react'
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
} from './style'

export interface HeroProps {
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
            <SideBar />
        </HeroContainer>
    );
};

