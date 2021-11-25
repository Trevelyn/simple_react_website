import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarWrapper,SidebarLink, SidebarRoute, SideBtnWrap } from './Sidebar';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onclick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='Contact' onClick={toggle}>Contact us</SidebarLink>
                    <SidebarLink to='Clients' onClick={toggle}>Our Clients</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/enquire'>Enquire</SidebarRoute>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
