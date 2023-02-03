import React, {useState} from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import styled from 'styled-components'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const HomeContainer =styled.div`
        position: relative;
        min-height: 100vh;
    `;


    return (
        <HomeContainer>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Carousel/>
            <Card/>
            <Footer/>
        </HomeContainer>
    )
}

export default Home
