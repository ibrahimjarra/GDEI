import React from 'react'
import Image from '../../images/image-boat.jpg'
import {CarouselContainer,  BackgroundImage, InfoBox, InfoHeader, InfoPara} from './CarouselElements'
import styled from 'styled-components'



function Carousel() {

    const StyledButton =styled.button`
        background-color: #fff ;
        border: 2px solid #fff;
        border-radius: 3px;
        color: #77a5b3;
        width: 6rem;
        height: 2rem;
        margin-left: 3rem;
        margin-top:1rem;
    `



    return (
        <>
            <CarouselContainer>
                    <BackgroundImage src={Image} />
                    <InfoBox>
                        <InfoHeader>Welcome</InfoHeader>
                        <InfoPara> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam e </InfoPara>
                        <StyledButton>Click Me</StyledButton>

                    </InfoBox>
            </CarouselContainer>

        </>
    )
}

export default Carousel
