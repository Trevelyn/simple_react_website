import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #452c63;
`;
export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and(max-width: 820px){
        padding-t0p: 32px;
    }

`;
export const FooterLinksWrapper = styled.div`
    display: flex;


    @media screen and(max-width: 820px){
        felex-direction: column;
    }
`;
export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and(max-width: 820px){
        margin: 0;
        padding: 10px;
        width: 100%
    }

`;
export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom:0.5rem;
    font-size: 14px

    &:hover:{
    color: #6b6de7 ;
    transition: 0.3s ease-in-out;
    }
`;
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;    
`;
