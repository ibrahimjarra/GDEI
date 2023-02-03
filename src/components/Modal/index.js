import React from 'react'
import{ModelContainer, ModelBox, ModelImage, ModelMemberName,ModelMemberTitle, ModelMemberBio, ClosedIcon } from './ModalElements'


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





const Model = ({showModal, showModal2, showModal3,showModal4 ,showModal5,showModal6 ,showModal7 ,showModal8 ,showModal9 ,showModal10 ,showModal11 ,showModal12 ,showModal13 ,showModal14 ,showModal15 ,  setShowModal,  setShowModal2,  setShowModal3,  setShowModal4, setShowModal5 , setShowModal6 , setShowModal7, setShowModal8, setShowModal9, setShowModal10, setShowModal11, setShowModal12, setShowModal13, setShowModal14, setShowModal15}) => {


    
    const boardMember1 = {
        image: boardMemberImg1,
        name: "John Loum",
        title: "President",
        bioPre:"John Loum was born and raised as a Gambian with 'tremendous patriotic love for our beloved country and people'. At an early age from a humbled background, he left home in pursuit of a dream, which led him to travel and live, over the last twenty years, in many West African countries, and Western and Northern Europe. John also studied, worked, and served in the United States. He is married and blessed with four boys. His sons are each serving in various fields of interest. One resides in San Diego and works with laser surgery. The second studied hospital management and is the CEO and Founder of Universal Care for Africa. Another studied law and is the Assistant Director at a University and his youngest son is studying Political Science in San Diego.  John has gained accumulative skills and experiences from his parents and different organizations. In the 1980s, he was given the responsibility to organize the first international women dialogue conference, which took place in the Gambia, which was held at the Friendship Hostel in Bakau. He was the first African to become the Regional Coordinator of his organization for the West African region. He proceeded to work with the Danish Sudan Mission in Denmark, which he eventually left to study at Birmingham and Oxford, UK. Completing his studies in 1986 from Oxford, England, his organization transferred him to Sierra Leone. At that time, the ten-year civil war had erupted. Nevertheless, his family managed by God's saving protection to live through the civil war. At the end of the war he proceeded to the United States, where he pursued further studies at Hartford, Connecticut and then Ft. Wayne Indiana. He studied and worked with various ethnic communities including refugees from different African countries earning distinguished awards from the governor of Indiana. A couple of the awards included The Distinguished Hoosier Award and the Jefferson Award. Additionally, he received various University and Community Awards from various works and services among the African immigrants. In St. Louis, MI, he had the honor of serving as the Director of the Ethnic Institute at the Graduate Theological Institution. His responsibility included working with all first generation ethnic Americans including Bosnians, Japanese, Nepalese, Liberians, Sudanese, Nigerians, and Arabs. This gave him multiple exposure and divergent views on dealing and navigating the various groups of people, which left him with a great love for human diversity acceptance and tolerance. So he thinks that with these collective experiences, he is well positioned “to work with my fine Gambian distinguished experts in various fields. I love you all and I call upon your full cooperation forbearance and understanding in walking together for the common good of our beloved motherland, the smiling coast of the Gambia.",
      };
    
      const boardMember2 = {
        image: boardMemberImg2,
        name: "Fatou Njie-Jallow",
        title: "President Elect ",
        bioPre:
          "Fatou Njie-Carr has worked in healthcare for over15 years and really enjoy being able to impact patient care through my work. She has developed, optimized, and managed processes that have impacted many different areas including Dental, Optometry, Primary Care and Psychiatry that have led to improved efficiency and lower overhead. Fatou is operationally focused and enjoy finding different solutions that can be scaled across departments. ",
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
          "C. Omar Kebbeh is a Gambian-born economist based in Washington DC. He currently works for the U.S. Bureau of Economic Analysis (BEA). Prior to joining BEA, he worked as a Statistician for the State of North Carolina Government. His research interests are in remittances, international labor movements, economic growth, international trade, and debt sustainability. He studied at the University of North Carolina at Greensboro, North Carolina State University, and Duke University.",
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
          "Matarr Sajaw is an experienced leader with a history of producing superior results and a proven track record of building high performing teams. Skilled in Compliance and regulatory management, loss prevention management, business metric development and data analytics, sales building and revenue management. Matarr is married and together with his spouse they have four children. He is a devoted husband, father, son, and passionate community development advocate. He works with various community organizations in the Fairfield county area by raising awareness and funds to support disadvantage people in his community. In his current role for a national US Healthcare company, he is leading a team of over 50 healthcare professionals directly and has over 500 indirect reports.  He has been recognized by his peers as a key driver of change and innovation while improving processes to drive sustainable results through people. Matarr has received numerous awards from the US Congress, City Government, and Corporations for his contributions and achievements. His intellectual curiosity, openness and agility enabled him to serve on the boards of nonprofit organizations where his mentorship, coaching and involvement continues to help foster growth and development. He attended Gambia College School of Public Health from 1990 -1992, where he studied Public Health. NCTC, 1992- 1995, where he studied computer science, concentration in systems analysis and design. HU in 1995 -1996, where he studied operations management. ECSU 1997 – 1998 where he studied organizational management. He is currently licensed in Health, Life, Medicare & Annuities Insurance and Pharmacy. ",
      };
    
      const boardMember7 = {
        image: boardMemberImg7,
        name: "Mam Foon",
        title: "Director of Arts & Cultural Affairs",
        bioPre:
          "Mam Foon is a graphic designer and concert producer with 15 years of experience within the entertainment and design industry. Within entertainment she has worked for Selam(cultural/music organisation), project managed projects such as the exchange project Benachin, toured different countries in Africa and the Caribbean, presented artists like Youssou N’dour, Mr Eazi, Kaliffa, Oumou Sangaré and Maleek Berry and  many others in Sweden. On the design side, Mam has run her own business MBF Creatives (http://www.mbfcreatives.com/ ) where she has freelanced and worked with visual identities for The Black National Theatre of Sweden and Riksteatern etc. In 2015 she launched MAM FOON Lifestyle brand & I AM GAMBIAN that taught her more of the business process. She has an interest in value driven lean business, design thinking processes, visual communication, problem solving, brand development and connecting people. At the moment she has just finished a consultancy job at SONY Music Sweden and is studying Business Development at Hyper Island. She loves to laugh, travel, learn new things and gets a kick of life's aha moments. ",
      };
    
      const boardMember8 = {
        image: boardMemberImg8,
        name: "Abdoulie Sallah",
        title: "Director of Education & Professional Development",
        bioPre:
          "Abdoulie Sallah is a Senior Lecturer in Healthcare Management & Leadership and Program Director for the Advanced Management Program at Alliance Manchester Business School at the University of Manchester in the United Kingdom. Prior to this, he was a Senior Lecturer in International Business and Program Director for the Masters in Leadership & Management at the School of Strategy and Leadership at Coventry Business School (Coventry University). Whilst at Coventry University, Abdoulie served as a Faculty Board Member in the Faculty of Business & Law and sat on the Faculty Review and Approval Committee as well as serving as a Research Cluster Lead and a member of the Research Steering Committee. He has previously worked and taught at Leicester University School of Management, Salford University, Sharda University, De Montfort University and Staffordshire University as well as organizations such as the British Red Cross (Projects Coordinator) and the African Caribbean Citizens Forum (Development Officer).  Abdoulie completed his PhD at the University of Leicester Management School in 2008 (which combined Critical Management Studies and Political Economy) and holds a Masters’ degree in HRM (2004) and a Bachelor’s degree in Business Management (2003) from the University of Derby. He currently serves as the Editor for the Journal of Critical Southern Studies (Globalization and Development Stream) and also reviews for several peer reviewed journals including Employee Relations, World Development, International Journal of Sociology and Social Policy, Journal of Economics and Business Studies, Journal of Reviews on Global Economics and Journal of Critical African Studies. Abdoulie has led a number of research projects throughout his academic career and has provided strategic support and advice to a great number of community-based organizations in the UK. Abdoulie is interested in the politics of knowledge production and his research and writing is an attempt to understand and re-significance the excluded, occluded, omitted and marginalized narratives and voices in development policy, management and organization studies (particularly those from the South) as well as contesting the redemptive, totalizing and pugnacious capitalist narrative within the context of socio-economic development. Spatially, Abdoulie is interested in Globalization, the Informal Economy, Organizational Leadership and Spaces, Post-Colonial Theory, Public Policy and Capacity Development, Entrepreneurship, Critical Management Studies and Political Economy.",
      };
    
      const boardMember9 = {
        image: boardMemberImg9,
        name: "Ndeye Marie Njie",
        title: "Director of Energy, Infrastruture, & Climate Science",
        bioPre:
          "Ndeye Marie Njie brings to the GDEI Board experience in planning strategies for project development and delivery and client management. Her accountability and collaborative philosophy ensure decisions are applied and multidisciplinary teamwork is promoted toward a shared goal. Her vision for the Energy, Infrastructure and Climate Science Committee is to identify gaps in access to affordable and reliable energy, and infrastructure improvements to facilitate transportation of goods to market and other related economic development opportunities; develop realistic projects and deliver products that would benefit local communities. Ndeye Marie is an environmental consulting professional and practiced in conducting and documenting environmental studies in compliance with national laws. Ndeye Marie has authored and coordinated numerous Environmental Assessments documents, primarily for transportation infrastructure projects and is familiar with related government agency consultations necessary to meet regulations. Ndeye Marie obtained her BS (Agronomy & International Agriculture) and MS (Water Resources) degrees from Iowa State University; and PhD (Environmental Science) from The Ohio State University in the US. She is also certified as an ISI Envision Sustainability Professional (ENV SP) assisting engineers and design professionals to construct infrastructure projects sustainably. ",
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
          "Sulayman Badjie also commonly known as Saul Badjie was born in Banjul on Perseverance Street. He grew up with his grandparents in Kombo Busura. He went to Muslim High School (1983-1988) and worked at the President’s Office as an intelligence officer under the National Security Service NSS during the Jawara era (1989-1993) before traveling to the United States in August of 1993. He holds a BA in Public Affairs and a co-major in International Studies from Wayne State University in Detroit, MI (2001-2003). He also holds an MA in Public Administration specialized in the NGO sector from Walden University, Minneapolis MN (2009-2011). He worked in the auto industry notably Volkswagen in safety (1997-2009) before pivoting into the Education sector from 2010 to date. He is an interventionist but also serve as a Detention Assistant with Manassas City Public Schools in VA. Saul is married and has a 24-year-old son and two daughters aged 15 and 16 years. They live in Maryland in the United States and spent most of their time in Michigan prior to moving to Maryland in 2017. Most people know that Saul also hosts a program on Education on the Fatu Network. He is an Education advocate because he believes education is national security. Also believes that until people value the importance of education and invest resources for better learning outcomes, Africa will not be able to compete with partners. It is precisely why Saul wants to be a part of GDEI. “No nation has advanced and lifted their people from poverty without serious education reform. It is the only critical missing piece,” he added.",
      };
    
      const boardMember12 = {
        image: boardMemberImg12,
        name: "Kunna Faal",
        title: "Director of Membership & Public Relations",
        bioPre:
          "Kunna Faal is a Quality Assurance / Continuous Improvement Manager with over 20 years of experience in the food industry. In that time, she has held a variety of food safety roles to including lab manager and supplier quality manager.  She is a graduate of the Virginia Commonwealth University with a Bachelor's Degree in Chemistry and on track to finish her Master’s in Food Safety at Michigan State University. Kunna is passionate about Food Safety. She also loves to cook and is obsessed with watching cooking shows on YouTube and creating her own recipes. She is married with two beautiful kids who love to eat.  She is a servant leader who is passionate about helping the community and beyond. For years, she has been an active executive member of the Atlanta Gambian Emergency Relief Association (AGERA) team, first as a member of the education team, and then as the Public Relation Officer.  As the Director of Membership and Public Relations for the Gambian Diaspora Experts Initiative (GDEI), She plans to lead a team of dedicated, energetic and innovative individuals to help increase membership, develop, update, maintain and execute strategies to portray the positive image of the GDEI on social media, and other media platforms.",
      };
    
      const boardMember13 = {
        image: boardMemberImg13,
        name: "Ndey Fatou Jabbie",
        title: "Director of Science, Technology, & Innovation",
        bioPre:
          "Ndey Fatou Jabbie was born and raised in The Gambia. She has over 15 yrs. in the technology, engineering, and sustainability fields. As an energy efficiency expert, entrepreneur, and business owner, Fatou’s work in NYC centers around policy and compliance, social equity and economic development, project engineering implementations and energy cost savings through the delivery of a more comprehensive range of systems upgrades that address climate change or meet New York City&#39; s 80x2050 carbon emission reduction targets (https://usltechnology.com/ ). She has helped architects, companies, and government agencies build greener buildings, develop better building energy models, deliver LEED Certified buildings, and engineer I.T and controls network solutions. USEE’s work in The Gambia is focused on achieving economic growth, social equity and environmental conservation through designing and implementing projects in alignment with the Sustainable Development Goals, the National Development Plan and the guidelines set by the Global Environment Facility and Green Climate Fund. With a focus on sustainable practices, clean energy, conservation and the use of smart technologies, the team aim to contribute to the development initiatives undertaken by core government agencies and international stakeholders. Fatou holds an MSc. in Sustainability Management from Columbia University, a BSc. in Computer from Kentucky State University (an HBCU) and is a Leadership in Energy and Environmental Design (LEED AP BD+C) Accredited Professional (AP) in New Building Design and Construction. She lives in Hasting-on-Hudson, NY and visits the Gambia annually.",
      };
    
      const boardMember14 = {
        image: boardMemberImg14,
        name: "Jarra Jagne",
        title: "Founder",
        bioPre:
        "Jarra Jagne is a veterinarian with over 25 years of experience in poultry disease management.  She is a Senior Extension Associate in the Department of Population Medicine at Cornell University’s College of Veterinary Medicine (https://www.vet.cornell.edu/research/faculty/jarra-jagne). She translates and interprets poultry test data for veterinary practitioners and poultry producers as well as provides farm technical assistance to commercial poultry producers and small poultry farm owners. She was the Senior Veterinary Advisor for STOP Avian Influenza (AI), a project administered by DAI and funded by the United States Agency for International Development (USAID). Before joining the STOP AI project, she worked for a year as a Veterinary Diagnostician with the Food and Agriculture Organization (FAO) of the United Nations in Rome, Italy.  She worked for seven years in the commercial poultry sector in the United States as a Technical Services Manager for ISA Babcock, a large poultry genetics company.  She has worked in many countries in Africa, South East and Central Asia, Mexico and the Caribbean.  Jarra holds a Doctorate in Veterinary Medicine (DVM) from Cornell University and a BSc Hons. in Biology from Colorado State University. She completed a two-year residency in Avian Diseases and Pathology at the University of Pennsylvania and is a Diplomate of the American College of Poultry Veterinarians.  ",
      };
    
      const boardMember15 = {
        image: boardMemberImg15,
        name: "Veronica P.S. Njie-Carr",
        title: "Founder",
        bioPre:
          "Veronica Njie-Carr is a nurse researcher and an Associate Professor in the School of Nursing at the University of Mary¬land, Baltimore (https://www.nursing.umaryland.edu/directory/veronica-njie-carr/, with 35 years of nursing experience. Her work in academia spans over 25 years in universities and colleges in the Baltimore-Washington area in the United States including the University of Delaware, Howard University, and Johns Hopkins University. She is passionate and committed to contribute to finding solutions to eliminate health, global, and related dispar¬ities, including disparities in the academy (http://bookstore.dorrancepublishing.com/disparities-in-the-academy/ ).  Veronica’s teaching, scholar¬ship, and program of research has evolved over the years to reflect the changing trends in HIV prevention and care, and the needs of marginalized people. Research awards funded studies that include 1) leveraging tech¬nology to addressing the needs of aging women with HIV infection, and 2) investigating the experiences of immigrant and refugee women survivors of violence. Veronica is engaged in teaching, mentoring, and supervising master’s nursing students at the University of the Gambia where she serves as a consultant on curricula and research related activities. She contributes to building faculty and nurse leadership capacity in The Gambia through collaborative initiatives with academic nursing faculty and the nursing practice leadership. She has served on national and international organizations and is a Fellow of the West African College of Nursing. Veronica received a nursing diploma from The Gambia College in The Gambia; a baccalaureate degree in nursing from Howard Uni¬versity; a master’s in nursing education and adult health, and PhD in nursing science from The Catholic University of America in Washington, DC. In addition, she received a postdoctoral fellowship training from Johns Hop¬kins University in Baltimore, Maryland. ",
      };
    





    return (
        <>
            {showModal ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal( prev => !prev )}/>
                        <ModelImage src={boardMember1.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember1.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember1.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember1.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal2 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal2( prev => !prev )}/>
                        <ModelImage src={boardMember2.image} imgWidth="213px"  />
                        <ModelMemberName>{boardMember2.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember2.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember2.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal3 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal3( prev => !prev )}/>
                        <ModelImage src={boardMember3.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember3.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember3.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember3.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal4 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal4( prev => !prev )}/>
                        <ModelImage src={boardMember4.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember4.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember4.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember4.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal5 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal5( prev => !prev )}/>
                        <ModelImage src={boardMember5.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember5.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember5.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember5.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal6 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal6( prev => !prev )}/>
                        <ModelImage src={boardMember6.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember6.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember6.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember6.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal7 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal7( prev => !prev )}/>
                        <ModelImage src={boardMember7.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember7.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember7.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember7.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal8 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal8( prev => !prev )}/>
                        <ModelImage src={boardMember8.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember8.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember8.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember8.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal9 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal9( prev => !prev )}/>
                        <ModelImage src={boardMember9.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember9.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember9.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember9.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal10 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal10( prev => !prev )}/>
                        <ModelImage src={boardMember10.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember10.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember10.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember10.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal11 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal11( prev => !prev )}/>
                        <ModelImage src={boardMember11.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember11.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember11.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember11.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal12 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal12( prev => !prev )}/>
                        <ModelImage src={boardMember12.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember12.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember12.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember12.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal13 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal13( prev => !prev )}/>
                        <ModelImage src={boardMember13.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember13.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember13.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember13.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal14 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal14( prev => !prev )}/>
                        <ModelImage src={boardMember14.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember14.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember14.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember14.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
            {showModal15 ? (
                <ModelContainer>
                    
                    <ModelBox>
                    <ClosedIcon aria-label='Close' onClick={()=> setShowModal15( prev => !prev )}/>
                        <ModelImage src={boardMember15.image} imgWidth="213px" />
                        <ModelMemberName>{boardMember15.name} </ModelMemberName>
                        <ModelMemberTitle>{boardMember15.title} </ModelMemberTitle>
                        <ModelMemberBio>{boardMember15.bioPre}</ModelMemberBio>
                    </ModelBox>
                </ModelContainer>

            ) : null }
        </>
    )
}

export default Model
