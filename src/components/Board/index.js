import React, { useState } from "react";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import {
  BoardHeadContainer,
  BoardHeadTitle,
  BoardBioContainer,
  BoardMemberBox,
  BoardMemberBio,
  BoardMemberImage,
  BoardMemberName,
  BoardMemberTitle,
} from "./BoardElements";

import styled from "styled-components";

import boardMemberImg1 from "../../images/JohnLoum.jpg";
import boardMemberImg2 from "../../images/fatouNjie.jpg";
import boardMemberImg3 from "../../images/isatouJobe.jpg";
import boardMemberImg4 from "../../images/cOmar.jpg";
import boardMemberImg5 from "../../images/paSako.jpg";
import boardMemberImg6 from "../../images/matarrSajaw.jpg";
import boardMemberImg7 from "../../images/mamFoon.jpg";
import boardMemberImg8 from "../../images/AbdoulieSallah.jpg";
import boardMemberImg9 from "../../images/ndeyeMarie.jpg";
import boardMemberImg10 from "../../images/gabouMendy.jpg";
import boardMemberImg11 from "../../images/saulBadjie.jpg";
import boardMemberImg12 from "../../images/kunnaFaal.jpg";
import boardMemberImg13 from "../../images/ndeyFatou.jpg";
import boardMemberImg14 from "../../images/jarraJagne.jpg";
import boardMemberImg15 from "../../images/veronicaNjie.jpg";
import Modal  from "../Modal";


const Board = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const Button = styled.button`
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 3px;
    color: #77a5b3;
    width: 6rem;
    height: 2rem;
    margin-top: 2rem;
    margin-left: 3rem;
    cursor: pointer;
  `;



  const boardMember1 = {
    image: boardMemberImg1,
    name: "John Loum",
    title: "President",
    bioPre:
      'John Loum was born and raised as a Gambian with "tremendous patriotic love for our beloved country and people". At an early age from a humbled background, he left home in pursuit of a dream, which led him to travel and live, over the last twenty years, in many West African countries, and Western and Northern Europe. John also studied, worked, and served in the United States. He is married and blessed with four boys. His sons are each serving in various fields of interest. One resides in San Diego and works with laser surgery. The second studied hospital management and is the CEO and Founder of Universal Care for Africa. Another studied law and is the Assistant Director at a University and his youngest son is studying Political Science in San Diego.  John has gained accumulative skills and experiences from his parents and different organizations. In the 1980s, he was given the responsibility to organize the first international women dialogue conference, which took place in the Gambia, which was held at the Friendship Hostel in Bakau. ',
  };

  const boardMember2 = {
    image: boardMemberImg2,
    name: "Fatou Njie-Jallow",
    title: "President Elect ",
    bioPre:
      "Fatou Njie-Carr has worked in healthcare for over15 years and really enjoy being able to impact patient care through my work. She has developed, optimized, and managed processes that have impacted many different areas including Dental, Optometry, Primary Care and Psychiatry that have led to improved efficiency and lower overhead. Fatou is operationally focused and enjoy finding different solutions that can be scaled across departments ",
  };

  const boardMember3 = {
    image: boardMemberImg3,
    name: "Isatou Jobe",
    title: "Secretary",
    bioPre:
      "Isatou Jobe was born and raised in the Gambia. Growing up she mostly lived in the Greater Banjul/Kombo area and the Lower River Division for three years. She also lived in the United Kingdom for two years. She moved to the US in 2004 where she received a Bachelor of Science in Community Health from SUNY Cortland and a Masters of Public Health from the University of New England. Isatou has been working for the New York City Department of Health and Mental Hygiene as a Public Health Sanitarian since 2010 within the Bureau of Food Safety. She is currently part of the City's Coronavirus Taskforce as a Congregate Setting Investigator. Isatou was recently part of a mentorship program called Leadership Gambia Diaspora Mentoring through The Gambia Youth Empowerment Project (YEP). Within a period of six months, Isatou worked with and mentored three aspiring women entrepreneurs to build their startups from ideas to actual businesses. Isatou lives in Upstate New York with her husband and children.",
  };

  const boardMember4 = {
    image: boardMemberImg4,
    name: "C. Omar Kebbeh",
    title: "Treasurer ",
    bioPre:
      "C. Omar Kebbeh is a Gambian-born economist based in Washington DC. He currently works for the U.S. Bureau of Economic Analysis (BEA). Prior to joining BEA, he worked as a Statistician for the State of North Carolina Government. His research interests are in remittances, international labor movements, economic growth, international trade, and debt sustainability. He studied at the University of North Carolina at Greensboro, North Carolina State University, and Duke University. ",
  };

  const boardMember5 = {
    image: boardMemberImg5,
    name: "Pa Sako Darboe",
    title: "Embassy Liaison",
    bioPre:
      "Pa Sako Darboe is the First Secretary at the Embassy of the Republic of The Gambia in Washington, DC (https://gm.usembassy.gov/).  He started his career at the Ministry of Foreign Affairs, International Cooperation and Gambians Abroad in 2014. While at the Ministry of Foreign Affairs, he attended diplomatic training abroad. To name a few, Pa Sako attended the Institute of Diplomacy and Foreign Relations (IDFR) in Kuala Lumpur and the Romanian Diplomatic Institute (RDI) in Bucharest. He graduated from Sharda University, with a bachelor’s degree (Hons) in International Business in 2014. He is currently in his final semester of a master’s degree in International Affairs at the Elliott School of International Affairs (ESIA), the George Washington University focusing on Conflict and Conflict Resolution with a regional concentration on Africa.  ",
  };

  const boardMember6 = {
    image: boardMemberImg6,
    name: "Matarr Sajaw",
    title: "Director of Agriculture & Processing",
    bioPre:
      "Matarr Sajaw is an experienced leader with a history of producing superior results and a proven track record of building high performing teams. Skilled in Compliance and regulatory management, loss prevention management, business metric development and data analytics, sales building and revenue management. Matarr is married and together with his spouse they have four children. He is a devoted husband, father, son, and passionate community development advocate. He works with various community organizations in the Fairfield county area by raising awareness and funds to support disadvantage people in his community. In his current role for a national US Healthcare company, he is leading a team of over 50 healthcare professionals directly and has over 500 indirect reports.  He has been recognized by his peers as a key driver of change and innovation while improving processes to drive sustainable results through people. ",
  };

  const boardMember7 = {
    image: boardMemberImg7,
    name: "Mam Foon",
    title: "Director of Arts & Cultural Affairs",
    bioPre:
      "Mam Foon is a graphic designer and concert producer with 15 years of experience within the entertainment and design industry. Within entertainment she has worked for Selam(cultural/music organisation), project managed projects such as the exchange project Benachin, toured different countries in Africa and the Caribbean, presented artists like Youssou N’dour, Mr Eazi, Kaliffa, Oumou Sangaré and Maleek Berry and  many others in Sweden. On the design side, Mam has run her own business MBF Creatives (http://www.mbfcreatives.com/ ) where she has freelanced and worked with visual identities for The Black National Theatre of Sweden and Riksteatern etc. In 2015 she launched MAM FOON Lifestyle brand & I AM GAMBIAN that taught her more of the business process. She has an interest in value driven lean business, design thinking processes, visual communication, problem solving, brand development and connecting people. ",
  };

  const boardMember8 = {
    image: boardMemberImg8,
    name: "Abdoulie Sallah",
    title: "Director of Education & Professional Development",
    bioPre:
      "Abdoulie Sallah is a Senior Lecturer in Healthcare Management & Leadership and Program Director for the Advanced Management Program at Alliance Manchester Business School at the University of Manchester in the United Kingdom. Prior to this, he was a Senior Lecturer in International Business and Program Director for the Masters in Leadership & Management at the School of Strategy and Leadership at Coventry Business School (Coventry University). Whilst at Coventry University, Abdoulie served as a Faculty Board Member in the Faculty of Business & Law and sat on the Faculty Review and Approval Committee as well as serving as a Research Cluster Lead and a member of the Research Steering Committee.  ",
  };

  const boardMember9 = {
    image: boardMemberImg9,
    name: "Ndeye Marie Njie",
    title: "Director of Energy, Infrastruture, & Climate Science",
    bioPre:
      "Ndeye Marie Njie brings to the GDEI Board experience in planning strategies for project development and delivery and client management. Her accountability and collaborative philosophy ensure decisions are applied and multidisciplinary teamwork is promoted toward a shared goal. Her vision for the Energy, Infrastructure and Climate Science Committee is to identify gaps in access to affordable and reliable energy, and infrastructure improvements to facilitate transportation of goods to market and other related economic development opportunities; develop realistic projects and deliver products that would benefit local communities. ",
  };

  const boardMember10 = {
    image: boardMemberImg10,
    name: "Gabou Mendy",
    title: "Director of Health & Health Systems",
    bioPre:
      "Gabou Mendy is trained as a Medical Doctor, with a Master degree in Public Health and Tropical Medicine.  He completed his residency in General Preventive Medicine.  He has over 35 years of experience in Primary Medical Care, HIV Medicine/Infectious Diseases and Global Health.  His work experience highlights clinical practice; program development; healthcare management; operations; quality improvement and patient safety; community-based planning; international development; and technical assistance for various organizations in The Gambia, Ghana, Haiti, Kenya, Mauritania, Nigeria, Rwanda and United States. Since 1999, Gabou has been affiliated with Healing Healthcare, Inc. in New Orleans, Louisiana as the founder and medical doctor; from 2017 with Global Hearts Medical Missions, Inc., (Global HOMM – International NGO in The Gambia) as a team leader and board member. ",
  };

  const boardMember11 = {
    image: boardMemberImg11,
    name: "Saul Badjie",
    title: "Director of Information, Technology, & Communications",
    bioPre:
      "Sulayman Badjie also commonly known as Saul Badjie was born in Banjul on Perseverance Street. He grew up with his grandparents in Kombo Busura. He went to Muslim High School (1983-1988) and worked at the President’s Office as an intelligence officer under the National Security Service NSS during the Jawara era (1989-1993) before traveling to the United States in August of 1993. He holds a BA in Public Affairs and a co-major in International Studies from Wayne State University in Detroit, MI (2001-2003). He also holds an MA in Public Administration specialized in the NGO sector from Walden University, Minneapolis MN (2009-2011). He worked in the auto industry notably Volkswagen in safety (1997-2009) before pivoting into the Education sector from 2010 to date.",
  };

  const boardMember12 = {
    image: boardMemberImg12,
    name: "Kunna Faal",
    title: "Director of Membership & Public Relations",
    bioPre:
      "Kunna Faal is a Quality Assurance / Continuous Improvement Manager with over 20 years of experience in the food industry. In that time, she has held a variety of food safety roles to including lab manager and supplier quality manager.  She is a graduate of the Virginia Commonwealth University with a Bachelor's Degree in Chemistry and on track to finish her Master’s in Food Safety at Michigan State University. Kunna is passionate about Food Safety. She also loves to cook and is obsessed with watching cooking shows on YouTube and creating her own recipes. She is married with two beautiful kids who love to eat.  She is a servant leader who is passionate about helping the community and beyond.",
  };

  const boardMember13 = {
    image: boardMemberImg13,
    name: "Ndey Fatou Jabbie",
    title: "Director of Science, Technology, & Innovation",
    bioPre:
      "Ndey Fatou Jabbie was born and raised in The Gambia. She has over 15 yrs. in the technology, engineering, and sustainability fields. As an energy efficiency expert, entrepreneur, and business owner, Fatou’s work in NYC centers around policy and compliance, social equity and economic development, project engineering implementations and energy cost savings through the delivery of a more comprehensive range of systems upgrades that address climate change or meet New York City&#39; s 80x2050 carbon emission reduction targets (https://usltechnology.com/ ). She has helped architects, companies, and government agencies build greener buildings, develop better building energy models, deliver LEED Certified buildings, and engineer I.T and controls network solutions.",
  };

  const boardMember14 = {
    image: boardMemberImg14,
    name: "Jarra Jagne",
    title: "Founder",
    bioPre:
      "Jarra Jagne is a veterinarian with over 25 years of experience in poultry disease management.  She is a Senior Extension Associate in the Department of Population Medicine at Cornell University’s College of Veterinary Medicine (https://www.vet.cornell.edu/research/faculty/jarra-jagne). She translates and interprets poultry test data for veterinary practitioners and poultry producers as well as provides farm technical assistance to commercial poultry producers and small poultry farm owners. She was the Senior Veterinary Advisor for STOP Avian Influenza (AI), a project administered by DAI and funded by the United States Agency for International Development (USAID). Before joining the STOP AI project, she worked for a year as a Veterinary Diagnostician with the Food and Agriculture Organization (FAO) of the United Nations in Rome, Italy.  She worked for seven years in the commercial poultry sector in the United States as a Technical Services Manager for ISA Babcock, a large poultry genetics company.  ",
  };

  const boardMember15 = {
    image: boardMemberImg15,
    name: "Veronica P.S. Njie-Carr",
    title: "Founder",
    bioPre:
      "Veronica Njie-Carr is a nurse researcher and an Associate Professor in the School of Nursing at the University of Maryland, Baltimore (https://www.nursing.umaryland.edu/directory/veronica-njie-carr/), with 35 years of nursing experience. Her work in academia spans over 25 years in universities and colleges in the Baltimore-Washington area in the United States including the University of Delaware, Howard University, and Johns Hopkins University. She is passionate and committed to contribute to finding solutions to eliminate health, global, and related dispar¬ities, including disparities in the academy (http://bookstore.dorrancepublishing.com/disparities-in-the-academy/ ).  Veronica’s teaching, scholar¬ship, and program of research has evolved over the years to reflect the changing trends in HIV prevention and care, and the needs of marginalized people.",
  };


  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  const [showModal2, setShowModal2] = useState(false)

  const openModal2 = () => {
    setShowModal2(prev => !prev)
  }
  
  const [showModal3, setShowModal3] = useState(false)

  const openModal3 = () => {
    setShowModal3(prev => !prev)
  }

  const [showModal4, setShowModal4] = useState(false)

  const openModal4 = () => {
    setShowModal4(prev => !prev)
  }

  const [showModal5, setShowModal5] = useState(false)

  const openModal5 = () => {
    setShowModal5(prev => !prev)
  }

  const [showModal6, setShowModal6] = useState(false)

  const openModal6 = () => {
    setShowModal6(prev => !prev)
  }

  const [showModal7, setShowModal7] = useState(false)

  const openModal7 = () => {
    setShowModal7(prev => !prev)
  }

  const [showModal8, setShowModal8] = useState(false)

  const openModal8 = () => {
    setShowModal8(prev => !prev)
  }


  const [showModal10, setShowModal10] = useState(false)

  const openModal10 = () => {
    setShowModal10(prev => !prev)
  }

  const [showModal11, setShowModal11] = useState(false)

  const openModal11 = () => {
    setShowModal11(prev => !prev)
  }

  const [showModal12, setShowModal12] = useState(false)

  const openModal12 = () => {
    setShowModal12(prev => !prev)
  }

  const [showModal13, setShowModal13] = useState(false)

  const openModal13 = () => {
    setShowModal13(prev => !prev)
  }

  const [showModal14, setShowModal14] = useState(false)

  const openModal14 = () => {
    setShowModal14(prev => !prev)
  }

  const [showModal15, setShowModal15] = useState(false)

  const openModal15 = () => {
    setShowModal15(prev => !prev)
  }

  const [showModal9, setShowModal9] = useState(false)

  const openModal9 = () => {
    setShowModal9(prev => !prev)
  }



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <BoardHeadContainer>
        <BoardHeadTitle>The Board</BoardHeadTitle>
      </BoardHeadContainer>

      <BoardBioContainer>
        <BoardMemberBox>
          <BoardMemberImage src={boardMember1.image} />
          <BoardMemberName>{boardMember1.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember1.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember1.bioPre}</BoardMemberBio>
          <Button onClick= {openModal}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal={showModal} setShowModal={setShowModal}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember2.image} imgWidth="213px" />
          <BoardMemberName>{boardMember2.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember2.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember2.bioPre}</BoardMemberBio>
          <Button onClick= {openModal2}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal2={showModal2} setShowModal2={setShowModal2}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember3.image} imgWidth="213px" />
          <BoardMemberName>{boardMember3.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember3.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember3.bioPre}</BoardMemberBio>
          <Button onClick= {openModal3}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal3={showModal3} setShowModal3={setShowModal3}/>

        <BoardMemberBox >
          <BoardMemberImage src={boardMember4.image} imgWidth="213px" />
          <BoardMemberName>{boardMember4.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember4.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember4.bioPre}</BoardMemberBio>
          <Button onClick= {openModal4}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal4={showModal4} setShowModal4={setShowModal4}/>

        <BoardMemberBox>
          <BoardMemberImage src={boardMember5.image} imgWidth="213px" />
          <BoardMemberName>{boardMember5.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember5.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember5.bioPre}</BoardMemberBio>
          <Button onClick= {openModal5}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal5={showModal5} setShowModal5={setShowModal5}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember6.image} imgWidth="213px" />
          <BoardMemberName>{boardMember6.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember6.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember6.bioPre}</BoardMemberBio>
          <Button onClick= {openModal6}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal6={showModal6} setShowModal6={setShowModal6}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember7.image} imgWidth="213px" />
          <BoardMemberName>{boardMember7.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember7.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember7.bioPre}</BoardMemberBio>
          <Button onClick= {openModal7}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal7={showModal7} setShowModal7={setShowModal7}/>

        <BoardMemberBox>
          <BoardMemberImage src={boardMember8.image} imgWidth="213px" />
          <BoardMemberName>{boardMember8.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember8.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember8.bioPre}</BoardMemberBio>
          <Button onClick= {openModal8}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal8={showModal8} setShowModal8={setShowModal8}/>

        <BoardMemberBox>
          <BoardMemberImage src={boardMember9.image} imgWidth="213px" />
          <BoardMemberName>{boardMember9.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember9.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember9.bioPre}</BoardMemberBio>
          <Button onClick= {openModal9}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal9={showModal9} setShowModal9={setShowModal9}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember10.image} imgWidth="213px" />
          <BoardMemberName>{boardMember10.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember10.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember10.bioPre}</BoardMemberBio>
          <Button onClick= {openModal10}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal10={showModal10} setShowModal10={setShowModal10}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember11.image} imgWidth="213px" />
          <BoardMemberName>{boardMember11.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember11.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember11.bioPre}</BoardMemberBio>
          <Button onClick= {openModal11}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal11={showModal11} setShowModal11={setShowModal11}/>

        <BoardMemberBox>
          <BoardMemberImage src={boardMember12.image} imgWidth="213px" />
          <BoardMemberName>{boardMember12.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember12.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember12.bioPre}</BoardMemberBio>
          <Button onClick= {openModal12}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal12={showModal12} setShowModal12={setShowModal12}/>

        <BoardMemberBox>
          <BoardMemberImage src={boardMember13.image} imgWidth="213px" />
          <BoardMemberName>{boardMember13.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember13.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember13.bioPre}</BoardMemberBio>
          <Button onClick= {openModal13}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal13={showModal13} setShowModal13={setShowModal13}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember14.image} imgWidth="213px" />
          <BoardMemberName>{boardMember14.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember14.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember14.bioPre}</BoardMemberBio>
          <Button onClick= {openModal14}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal14={showModal14} setShowModal14={setShowModal14}/>

        <BoardMemberBox opacity="100%">
          <BoardMemberImage src={boardMember15.image} imgWidth="213px" />
          <BoardMemberName>{boardMember15.name}</BoardMemberName>
          <BoardMemberTitle>{boardMember15.title} </BoardMemberTitle>
          <BoardMemberBio>{boardMember15.bioPre}</BoardMemberBio>
          <Button onClick= {openModal15}>Read More</Button>
        </BoardMemberBox>
        <Modal showModal15={showModal15} setShowModal15={setShowModal15}/>
        <Footer />
      </BoardBioContainer>
    </>
  );
};

export default Board;
