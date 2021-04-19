import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const workExp = [
  {
    company: "Arc’teryx Montreal",
    jobs: [
      {
        title: "Content Creator | 2017 - 2020 | Montreal, Canada",
        description: [
          "Produced content for social media and marketing campaigns of the Arc’teryx Montreal Brand Store",
          "Established a creative direction aligned with the brand image",
          "Worked under the supervision of the Marketing Lead of Arc’teryx in Montreal",
        ],
      },
      {
        title: "Sales Assistant | 2017 - 2019 | Montreal, Canada",
        description: [
          "Developed extensive knowledge of the outdoor industry and technical clothing",
          "Understood client needs and offered appropriate solutions",
          "Generated around $200,000 in direct sales",
          "Developed teamwork, punctuality, and adaptation skills",
        ],
      },
    ],
  },
  {
    company: "Concordia Ski & Snowboard Club",
    jobs: [
      {
        title: "President | 2018 - 2019 | Montreal, Canada | Volunteering",
        description: [
          "Ran one of the most active club on campus with more than 500 active members",
          "Planned and ran over 20 yearly events (including ten one-day trips and two weekenders)",
          "Generated over $90,000 in sales throughout the year",
          "Managed a team of six people",
          "Developed leadership and teamwork skills",
          "Worked with external companies such as Red Bull and Orage",
          "Oversaw the finance and marketing of the club",
          "Collaborated with other school associations.",
        ],
      },
      {
        title: "VP Marketing | 2017 - 2018 | Montreal, Canada | Volunteering",
        description: [
          "Created designs for social media promotion",
          "Handled social media marketing campaigns (Facebook Ads, Instagram)",
          "Respected a schedule to deliver content and posts",
          "Took photos and videos for the promotion of the club",
        ],
      },
    ],
  },
  {
    company: "Extra-curricular activities",
    jobs: [
      {
        title: "Web Development",
        link: "/web-development",
        description: [
          "At the end of my bachelor’s degree, I had realized the importance of the web and decided to study more about it. My biggest motivation was to understand how the web works to face its realities, limits, technologies, and trends. Another key takeaway is the ability to speak the language of developers and understand the challenges they face.",
          "As a developer, I created:",
        ],
        list: [
          "An e-commerce website (Full-Stack | React, Redux, JavaScript, Node.js, MongoDB, Stripe)",
          "A Twitter clone (Full-Stack | React, Redux, JavaScript, Node.js)",
          "An airline reservation system (Full-Stack | React, Redux, JavaScript, Node.js)",
          "A video game (Frontend | HTML, CSS, JavaScript)",
          "A podcast website (WordPress)",
        ],
      },
      {
        title: "Photography",
        link: "/photography",
        description: [
          "On the side of my studies, I started to take some projects as a photographer. I have done photoshoots for clothing lines, fashion shows, events, movies, and sporting events. These experiences gave me a lot of insights into what goes on behind the scenes. I had the chance to work with producers, movie directors, graphic designers, and filmmakers, amongst others; Allowing me to understand what they do, what they charge, and how they operate. Today, photography is a passion and a hobby on the side of my main activity.",
          "Some of the people I worked with are: Arc’teryx, Allez-Up, Jackalope, Psicobloc, L’Équipe, Gripped, CBC, RDS, and more...",
        ],
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <>
      <Wrapper>
        <Header>Work Experience</Header>
        <Main>
          <ExpWrapper className="Arcteryx">
            <JobCompany>{workExp[0].company}</JobCompany>
            <JobWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <JobTitle>{workExp[0].jobs[0].title}</JobTitle>
                {workExp[0].jobs[0].description.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <JobDescription>{item}</JobDescription>
                      </div>
                    </>
                  );
                })}
                <JobTitle>{workExp[0].jobs[1].title}</JobTitle>
                {workExp[0].jobs[1].description.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <JobDescription>{item}</JobDescription>
                      </div>
                    </>
                  );
                })}
              </ContentRight>
            </JobWrapper>
          </ExpWrapper>
          <ExpWrapper className="CSSC">
            <JobCompany>{workExp[1].company}</JobCompany>
            <JobWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <JobTitle>{workExp[1].jobs[0].title}</JobTitle>
                {workExp[1].jobs[0].description.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <JobDescription>{item}</JobDescription>
                      </div>
                    </>
                  );
                })}
                <JobTitle>{workExp[1].jobs[1].title}</JobTitle>
                {workExp[1].jobs[1].description.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <JobDescription>{item}</JobDescription>
                      </div>
                    </>
                  );
                })}
              </ContentRight>
            </JobWrapper>
          </ExpWrapper>
          <ExpWrapper className="extra">
            <JobCompany>{workExp[2].company}</JobCompany>
            <JobWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <ExtraHeader>
                  <JobTitleNoMargin>
                    {workExp[2].jobs[0].title}
                  </JobTitleNoMargin>
                  |<Link to="/web-development">See portfolio</Link>
                </ExtraHeader>
                <JobDescription>
                  {workExp[2].jobs[0].description[0]}
                </JobDescription>
                <JobDescriptionExtra>
                  {workExp[2].jobs[0].description[1]}
                </JobDescriptionExtra>
                <div style={{ marginTop: "5px" }}>
                  <JobWrapper>
                    <LeftBar></LeftBar>
                    <ContentRight>
                      {workExp[2].jobs[0].list.map((item, index) => {
                        return (
                          <>
                            <div key={index}>
                              <ListItem>{item}</ListItem>
                            </div>
                          </>
                        );
                      })}
                    </ContentRight>
                  </JobWrapper>
                </div>{" "}
                <ExtraHeader style={{ marginTop: "20px" }}>
                  <JobTitleNoMargin>
                    {workExp[2].jobs[1].title}
                  </JobTitleNoMargin>
                  |<Link to="/photography">See portfolio</Link>
                </ExtraHeader>
                <JobDescription>
                  {workExp[2].jobs[1].description[0]}
                </JobDescription>
                <JobDescriptionExtra>
                  {workExp[2].jobs[1].description[1]}
                </JobDescriptionExtra>
              </ContentRight>
            </JobWrapper>
          </ExpWrapper>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Header = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  margin: 20px 0px;
`;

const Main = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
`;

const ExpWrapper = styled.div``;

const ExtraHeader = styled.div`
  display: flex;
  font-weight: 500;
`;

const JobCompany = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  margin: 25px 0px 10px 0px;
`;

const JobWrapper = styled.div`
  display: grid;
  grid-template-columns: 2px 1fr;
  grid-gap: 12px;
`;

const LeftBar = styled.div`
  height: auto;
  width: 2px;
  background-color: black;
  grid-column: 1/2;
  border-radius: 1000px;
`;

const ContentRight = styled.div`
  grid-column: 2/3;
`;

const JobTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 1px;
  font-weight: 500;
  :last-of-type {
    margin-top: 15px;
  }
`;

const JobTitleNoMargin = styled.div`
  font-weight: 500;
  margin: 0px;
  margin-right: 5px;
`;

const JobDescription = styled.p`
  margin: 0px;
  text-align: justify;
  @media (max-width: 500px) {
    text-align: left !important;
  }
`;

const JobDescriptionExtra = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  text-align: justify;
  @media (max-width: 500px) {
    text-align: left !important;
  }
`;

const ListItem = styled.p`
  margin: 0px;
  text-align: justify;
  @media (max-width: 500px) {
    text-align: left !important;
  }
`;

const Link = styled(NavLink)`
  margin-left: 5px;
  color: black;
  transition: 300ms ease-in-out;
  &:hover {
    text-decoration: none;
  }
`;

export default WorkExperience;
