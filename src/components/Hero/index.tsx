import { useState } from 'react'
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {
    HeroContainer, HeroContent, HeroH1, HeroItems, HeroP,
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
            <HeroContent>
            <HeroItems>
                <HeroH1>This is StarWars FanSite</HeroH1>
                <HeroP>Using https://swapi.dev/</HeroP>
            </HeroItems>
        </HeroContent>
        </HeroContainer>

    );
};

