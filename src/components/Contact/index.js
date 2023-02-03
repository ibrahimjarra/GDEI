import React  ,{ useState } from 'react';
import styled from 'styled-components';
import {css} from 'styled-components';


import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {ContactContainer, ContactTitle, ContactForm, ContactOrgInfo,ContactLabel,  ContactInput, ContactTextArea} from './ContactElements';




const Contact = () => {
        
    const [isOpen, setIsOpen] = useState(false); 
        
    const Button = styled.button`
    background-color: #fff ;
    border: 2px solid #B8161F;
    border-radius: 3px;
    color: #B8161F;
    width: 6rem;
    height: 2rem;
    cursor: pointer;
`    



    const toggle = () => {
        setIsOpen(!isOpen);
        };


        const WrapperGrid = styled.div`
            ${props => props.full && css`
                grid-column: 1 / 3;
            `}
        `;





    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <ContactContainer>
            <ContactTitle></ContactTitle>
            <ContactOrgInfo/>
            <ContactForm>
                <WrapperGrid>
                    <ContactLabel>Name</ContactLabel>
                    <ContactInput type='text' name='name'/>
                </WrapperGrid>
                <WrapperGrid>
                    <ContactLabel>Company</ContactLabel>
                    <ContactInput type='text' name='company'/>
                </WrapperGrid>
                <WrapperGrid>
                    <ContactLabel>Email Address</ContactLabel>
                    <ContactInput type='email' name='email'/>
                </WrapperGrid>
                <WrapperGrid>
                    <ContactLabel>Phone Number</ContactLabel>
                    <ContactInput type='text' name='phone'/>
                </WrapperGrid>
                <WrapperGrid full>
                    <ContactLabel>Message</ContactLabel>
                    <ContactTextArea name='message' rows='5'> </ContactTextArea>
                </WrapperGrid>
                <WrapperGrid full>
                    <Button>Submit</Button>
                </WrapperGrid>



            </ContactForm>


        </ContactContainer>


        <Footer/>    
        </>
    )
}

export default Contact
