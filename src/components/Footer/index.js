import React from 'react';import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './Footer';

export const Footer = () => {
    return (
        <>
         <FooterContainer>
             <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle></FooterLinkTitle>
                            <FooterLink to='/'>Home</FooterLink>
                            <FooterLink to='/about'>About Us</FooterLink>
                            <FooterLink to='/services'>Services</FooterLink>
                            <FooterLink to='/contact'>Contact us</FooterLink>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>instagram</FooterLink>
                            <FooterLink to='/about'>facebook</FooterLink>
                            <FooterLink to='/services'>twitter</FooterLink>
                            <FooterLink to='/contact'>Linkedin</FooterLink>
                        
                    </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
             </FooterWrap>
         </FooterContainer>   
        </>
    );
};
export default Footer;