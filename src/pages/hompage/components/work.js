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
    company: "GFS Summer Camp",
    jobs: [
      {
        title:
          "Marketing Assistant & Content Creation | Summer 2017 & Summer 2018 | Tignes, France | Full-time",
        description: [
          "Produced content for social media marketing campaigns including videos, photos, and designs",
          "Planned social media schedule and post content on multiple platforms",
          "Used Facebook and Instagram ads for promotion",
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
          "Ran one of the most active clubs on campus with more than 500 active members",
          "Planned and ran over 20 yearly events (ten one-day trips and two weekenders)",
          "Managed a team of six people",
          "Developed leadership and teamwork skills",
          "Worked with external companies such as Red Bull and Orage",
          "Oversaw the finance and marketing of the club",
          "Collaborated with other school associations",
        ],
      },
      {
        title: "VP Marketing | 2017 - 2018 | Montreal, Canada | Volunteering",
        description: [
          "Created content for marketing campaigns (Photos, Videos, Text, Designs, and Newsletters)",
          "Handled marketing campaigns on various channels (Facebook, Instagram, Website, Mailchimp, and Google Ads)",
          "Organized schedule for posting the campaigns",
          "Used analytics to evaluate and improve the performance of marketing campaigns",
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
        description:
          "Early on, I realized the importance of digital technologies in marketing. Upon graduating from my bachelor's, I decided to learn more about digital and begun a web development program. My greatest motivation was to fully understand the realities, limits, and trends driving the web. Another key takeaway emerging out of this experience is speaking the language of developers and understanding the challenges they face. As a developer, I created an e-commerce website, a Twitter clone, an airline reservation system, and a small video game.",
      },
      {
        title: "Photography",
        link: "/photography",
        description:
          "Photography is one of my hobbies and I occasionally work on “professional” projects. Over the years, I have had the chance to develop a great network of creators in Montreal and understand what goes on behind-the-scenes of photoshoots, movies, events, and more. Photography has given me the chance to develop my creative thinking skills, work ethic, and professionalism. Find some of my work on Instagram (@mathieutranchida).",
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <>
      <Wrapper>
        <Header>Work Experience (while studying)</Header>
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
          <ExpWrapper className="GFS">
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
              </ContentRight>
            </JobWrapper>
          </ExpWrapper>
          <ExpWrapper className="CSSC">
            <JobCompany>{workExp[2].company}</JobCompany>
            <JobWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <JobTitle>{workExp[2].jobs[0].title}</JobTitle>
                {workExp[2].jobs[0].description.map((item, index) => {
                  return (
                    <>
                      <div key={index}>
                        <JobDescription>{item}</JobDescription>
                      </div>
                    </>
                  );
                })}
                <JobTitle>{workExp[2].jobs[1].title}</JobTitle>
                {workExp[2].jobs[1].description.map((item, index) => {
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
            <JobCompany>{workExp[3].company}</JobCompany>
            <JobWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <ExtraHeader>
                  <JobTitleNoMargin>
                    {workExp[3].jobs[0].title}
                  </JobTitleNoMargin>
                  |<Link to="/web-development">See portfolio</Link>
                </ExtraHeader>
                <JobDescription>
                  {workExp[3].jobs[0].description}
                </JobDescription>
                <ExtraHeader style={{ marginTop: "20px" }}>
                  <JobTitleNoMargin>
                    {workExp[3].jobs[1].title}
                  </JobTitleNoMargin>
                  |<Link to="/photography">See portfolio</Link>
                </ExtraHeader>
                <JobDescription>
                  {workExp[3].jobs[1].description}
                </JobDescription>
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
  :first-of-type {
    margin-top: 0px;
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
