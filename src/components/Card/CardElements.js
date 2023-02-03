import styled from 'styled-components';


export const CardContainer = styled.div`
    display: block;
    position: relative;
    padding-bottom: 60px;
`
export const CardSection = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 97%; 
    height: auto;
    background-color:#fff ;
    padding: 24px ;
    margin-left: auto;
    margin-right: auto;
    
    

    justify-content: center;
`



export const CardWrapper = styled.div`
    background-color: ${props => props.inputColor || '#fff'} ;
    display: block;
    width: 100%;
    height: 600px;
    margin: 0 10px 0 10px;
    
`

export const CardHeader = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin-top: 1rem ;
    margin-left: 1rem;

`

export const CardInfo = styled.p`
    color: #fff;
    margin-top: 1rem ;
    margin-left: 1rem;
    width: 75%;
    line-height: 1.7em;

    
`
