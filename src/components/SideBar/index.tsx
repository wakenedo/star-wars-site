import { SidebarContainer, SidebarLink, SidebarMenu } from './styles';
import SidebarLogo from '../../assets/StarWarsLogo.png'
import TieFighterIcon from '../../assets/tie_fighter_by_radiusss.svg'


export const SideBar = () => {
    return (
        <SidebarContainer>
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