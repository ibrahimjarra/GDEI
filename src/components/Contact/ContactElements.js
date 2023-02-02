import styled from "styled-components";


export const ContactContainer = styled.div`
    

`

export const ContactTitle = styled.h1``
export const ContactForm = styled.form` 
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 60%;
    margin-left: auto;
    margin-right:auto;
    padding: 5rem ;
`
export const ContactOrgInfo = styled.aside` 
    background-color: #B8161F;
    font: 70px; 
    text-align: center; 
    width: 430px;
    height: 430px;
    float: left;
    position: absolute;
    @media (min-width: 700px) {
        text-align: left; 
    }
`

export const ContactLabel = styled.label`
    display: block;
`

export const ContactTextArea = styled.textarea`
    border: 1px solid #E6343B; 
    padding: 1em; 
    width: 100%; 
`



export const ContactInput = styled.input`
    border: 1px solid #E6343B; 
    padding: 1em; 
    width: 100%; 

`


