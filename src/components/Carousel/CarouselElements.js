import styled from "styled-components";
// import image from '../../images/backgroundflag.jpg';
import Button from '../Button';

export const CarouselContainer = styled.div`
display: block;
width: 100%;
margin-left: auto;
margin-right: auto;
padding-bottom: 20px;
width: 95%;
height: 700px;
contain: content;

`


export const BackgroundImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;


`

export const InfoBox = styled.div`
position: absolute;
top: 100px;
left: 80px;
height: 400px;
width: 600px;
background-color: #77a5b3;
opacity: 95%;

@media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    width: 100%;
    top:0;
    left: 0;

}

`

export const InfoHeader = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    margin-top: 3rem ;
    margin-left: 3rem;
`

export const InfoPara = styled.p`
    color: #fff;
    margin-top: 2rem ;
    margin-left: 3rem;
    width: 75%;
    line-height: 1.7em;


`

export const StyledButton = styled(Button)`
    margin-left: 6rem;
`