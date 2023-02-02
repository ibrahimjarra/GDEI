import React from 'react';
import { CardContainer, CardWrapper, CardHeader, CardInfo ,CardSection} from './CardElements';



const Card = () => {
    return (
        <CardContainer>
            <CardSection>
            <CardWrapper inputColor='#ce1126'>
                <CardHeader >Welcome</CardHeader>
                <CardInfo>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  </CardInfo>
            </CardWrapper>
            <CardWrapper inputColor='#0c1c8d'>
                <CardHeader >Welcome</CardHeader>
                <CardInfo> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </CardInfo>
            </CardWrapper>
            <CardWrapper inputColor='#3a7729' >
                <CardHeader >Welcome</CardHeader>
                <CardInfo> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </CardInfo>
            </CardWrapper>
            </CardSection>
        </CardContainer>
    )
}

export default Card

