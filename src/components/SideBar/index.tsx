import SidebarLogo from '../../assets/StarWarsLogo.png'
import TieFighterIcon from '../../assets/tie_fighter_by_radiusss.svg'

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarMenu
} from './styles';



export const SideBar = () => {
    return (
        <SidebarContainer >
            <Icon>
                <CloseIcon />
            </Icon>

            <div className="sideBarLogo">
                <img src={SidebarLogo} alt="" />
            </div>
            <SidebarMenu>
                <SidebarLink to='/'>
                    <img src={TieFighterIcon} alt="" />
                    <p>
                        People
                    </p>
                </SidebarLink>

                <SidebarLink to='/'>
                    <img src={TieFighterIcon} alt="" />
                    <p>
                        Planets
                    </p>
                </SidebarLink>

                <SidebarLink to='/'>
                    <img src={TieFighterIcon} alt="" />
                    <p>
                        Films
                    </p>

                </SidebarLink>

                <SidebarLink to='/'>
                    <img src={TieFighterIcon} alt="" />
                    <p>
                        Species
                    </p>

                </SidebarLink>
                <SidebarLink to='/'>
                    <img src={TieFighterIcon} alt="" />
                    <p>
                        Vehicles
                    </p>

                </SidebarLink>
                <SidebarLink to='/'>
                    <img src={TieFighterIcon} alt="" />
                    <p>
                        Starships
                    </p>
                </SidebarLink>

            </SidebarMenu>
        </SidebarContainer>
    )

}