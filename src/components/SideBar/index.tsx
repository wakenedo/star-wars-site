import SidebarLogo from '../../assets/StarWarsLogo.png'
import DeathStarIcon from '../../assets/death_star_by_radiusss.svg'
import { SideBarProps } from '../Hero';


import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarMenu
} from './styles';


export const SideBar = ({ isOpen, toggle } : SideBarProps) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>

            <div className="sideBarLogo">
                <img src={SidebarLogo} alt="" />
            </div>
            <SidebarMenu>
                <SidebarLink to='/'>
                    <img src={DeathStarIcon} alt="" />
                    <p>
                        People
                    </p>
                </SidebarLink>

                <SidebarLink to='/'>
                    <img src={DeathStarIcon} alt="" />
                    <p>
                        Planets
                    </p>
                </SidebarLink>

                <SidebarLink to='/'>
                    <img src={DeathStarIcon} alt="" />
                    <p>
                        Films
                    </p>

                </SidebarLink>

                <SidebarLink to='/'>
                    <img src={DeathStarIcon} alt="" />
                    <p>
                        Species
                    </p>

                </SidebarLink>
                <SidebarLink to='/'>
                    <img src={DeathStarIcon} alt="" />
                    <p>
                        Vehicles
                    </p>

                </SidebarLink>
                <SidebarLink to='/'>
                    <img src={DeathStarIcon} alt="" />
                    <p>
                        Starships
                    </p>
                </SidebarLink>

            </SidebarMenu>
        </SidebarContainer>
    )

}