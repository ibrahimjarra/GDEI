import React from 'react'
import { FooterContainer, FooterMenu, FooterItem, FooterLink} from './FooterElements'

function Footer() {
    return (
        <>
                <FooterContainer>
                    <FooterMenu>
                        <FooterItem>
                            <FooterLink to='about'>About</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to='/Board'>Board</FooterLink>
                        </FooterItem>
                        <FooterItem>
                            <FooterLink to='/Contact'>Contact</FooterLink>
                        </FooterItem>
                    
                    </FooterMenu>
                </FooterContainer>    

        </>
    )
}

export default Footer
