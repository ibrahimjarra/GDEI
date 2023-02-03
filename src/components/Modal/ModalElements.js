import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';

export const ModelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color:#000000;
    position: fixed;
    top: 0;
    opacity: 95%;

    

`;

export const ClosedIcon = styled(FaTimes)`
    color: #000000;
    display: flex;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 2rem;
    cursor: pointer;
    
`; 

export const ModelBox = styled.div`
    display: inline-block;
    width: 60%;
    background-color:#fff;
    height: auto;
    border-radius: 2rem;
    padding-bottom: 5rem;

`;


export const ModelImage = styled.img`
    float:left;
    margin-left: 3rem;
    margin-right: 2rem;
    width: ${props => props.imgWidth };
`;
export const ModelMemberName = styled.h1`
    margin-top: 3rem;
    margin-left: 3rem;
`;
export const ModelMemberTitle = styled.h3`
    width: 90%;
    margin-left: 3rem;
`;
export const ModelMemberBio = styled.p `
    margin-top: 2rem;
    margin-left: 3rem;
    width: 85%;
    line-height: 1.7em ;
`;