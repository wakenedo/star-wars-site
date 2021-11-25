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
import { PeoplePage } from '../Pages/People/PeoplePage';


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
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1><img src={StormTrooperIcon} />Welcome to the world StarWars </HeroH1>
                    <HeroP>Using https://swapi.dev/</HeroP>
                </HeroItems>
                <PeoplePage />
            </HeroContent>
        </HeroContainer>

    );
};

