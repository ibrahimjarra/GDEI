import styled from "styled-components";

import {Link as LinkR} from "react-router-dom";

export const FooterContainer = styled.footer`
    position: absolute;
    background-color:  #000;
    display: inline-block;
    width: 100%;
    bottom: 0;
    text-align: center;
    
    
    
    

    @media screen and (max-width: 768px) {
        display: inline-flex;
        width: 100%;

    


    }
`

export const FooterMenu = styled.ul`
    display: inline-flex;
    
    


    @media screen and (max-width: 768px) {


    }
`

export const FooterItem = styled.li`
    padding: 1rem;
`
export const FooterLink = styled(LinkR)`
    text-decoration: none;
    color: white;

    &:hover {
    transition: all 0.2s ease-out;
    color: #ae2012;
    }
`


