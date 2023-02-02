import React from 'react'
import { SidebarContainer, ClosedIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon>

                </ClosedIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/About" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="/Board" onClick={toggle}>Board</SidebarLink>
                    <SidebarLink to="/Contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
