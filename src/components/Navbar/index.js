/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo ,MobileIcon ,NavMenu , NavItem ,NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
// eslint-disable-next-line 
import {Link} from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>GDIE</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/About'>About</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to='/Board'>Board</NavLinks>
                        </NavItem> 
                        <NavItem>
                            <NavLinks to='/Contact'>Contact</NavLinks>
                        </NavItem> 
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/Contact">Contact Us</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
