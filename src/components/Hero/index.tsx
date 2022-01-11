import { useState } from 'react'
import { NavBar } from '../NavBar';
import { SideBar } from '../SideBar';
import {
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroItems, 
    HeroP, 
} from './style'

import StormTrooperIcon from '../../assets/storm_trooper_by_radiusss.svg'



export interface SideBarProps {
    isOpen: boolean;
    onClick?: () => void;
    toggle?: () => void;
    
}



export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1><img src={StormTrooperIcon} />World of Star Wars </HeroH1>
                    <HeroP>Using https://swapi.dev/</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    );
};

