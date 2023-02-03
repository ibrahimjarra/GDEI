import styled from "styled-components";

export const BoardHeadContainer = styled.div`
    display: block;
    height: 150px;
    background-color: #77a5b3;
    opacity: 95%;

    

`


export const BoardHeadTitle = styled.h1 `
    color: #fff;
    font-size: 3rem;
    padding-top: 2rem;
    padding-left: 2rem;
`

export const BoardBioContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    position: relative;
    justify-content: ${props => props.justifyContent || 'flex-start'};
    

`

export const BoardMemberBox = styled.div`
    display: inline;
    width: 100%;
    height: 650px;
    background-color: #77a5b3;
    padding-top: 2em;
    opacity: ${props => props.opacity || "100%"} ;
   
    
    
`

export const BoardMemberName = styled.h1`
    color:#fff;
    margin-top: 3rem;
    margin-left: 3rem;
`

export const BoardMemberTitle = styled.h3`
    color:#fff;
    width: 90%;
    margin-left: 3rem;

`


export const BoardMemberBio = styled.p`
    margin-top: 2rem;
    margin-left: 3rem;
    width: 85%;
    line-height: 1.7em ;
    color:#fff;

` 

export const BoardMemberImage = styled.img`
    float:left;
    margin-left: 3rem;
    margin-right: 2rem;
    width: ${props => props.imgWidth };
`
