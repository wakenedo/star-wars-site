import { SidebarContainer, Content } from './styles';
import SidebarLogo from '../../assets/Star_Wars_Logo.svg'


export function SideBar() {
    return (
        <SidebarContainer  >
            <img src={SidebarLogo} alt="" />
            This is Side bar Container
            <Content>
                This is Side bar Content
            </Content>
        </SidebarContainer>
    )

}