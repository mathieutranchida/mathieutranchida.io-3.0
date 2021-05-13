import React from "react";
import styled from "styled-components";

const education = [
  {
    degree: "Online Executive Education Program - Certificate | 2021",
    program: "Digital Marketing Fundamentals",
    school: "IMD Business School",
  },
  {
    degree: "Diploma in Full-stack web development | 2020",
    list: [
      "Frontend (React, Redux, JavaScript, HTML, CSS)",
      "Backend (Node.js)",
      "Databases (SQL, NoSQL)",
    ],
    school: "Concordia University / Concordia Bootcamps",
  },
  {
    degree: "Bachelor of commerce | 2016 - 2020",
    program: "Management & International Business",
    school: "John Molson School of Business / Concordia University",
    list: [
      "Marketing Management",
      "International Marketing Management",
      "Cross Cultural Communication Management",
      "Analysis of Markets",
      "Business Technology Management",
      "Business Statistics",
      "Strategy and Competition",
    ],
  },
  {
    degree: "French Baccalauréat | 2013 - 2016",
    program: "Economic & Social Studies",
    programLowercase: " | “Mention: Très Bien”",
    school: "Lycée Français de Zürich",
  },
  {
    degree: "Google Skillshop certificates | 2021",
    list: [
      "Google Ads Display Certification",
      "Google Analytics Beginner Course",
      "Google Analytics Advanced Course",
    ],
  },
];

const Education = () => {
  return (
    <>
      <Wrapper>
        <Header>Education</Header>
        <Main>
          <DegreeWrapper className="GOOGLE">
            <Degree>{education[4].degree}</Degree>
            <SchoolWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                {education[4].list.map((item, index) => {
                  return <List key={index}>{item}</List>;
                })}
              </ContentRight>
            </SchoolWrapper>
          </DegreeWrapper>
          <DegreeWrapper className="IMD">
            <Degree>{education[0].degree}</Degree>
            <SchoolWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <Strong>{education[0].school}</Strong>
                <Strong>{education[0].program}</Strong>
              </ContentRight>
            </SchoolWrapper>
          </DegreeWrapper>
          <DegreeWrapper className="bootcamp">
            <Degree>{education[1].degree}</Degree>
            <SchoolWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <Strong>{education[1].school}</Strong>
                <div style={{ marginTop: "3px", marginBottom: "1px" }}>
                  <P>Coursework:</P>
                </div>
                <SchoolWrapper>
                  <LeftBar></LeftBar>
                  <ContentRight>
                    {education[1].list.map((item, index) => {
                      return (
                        <div key={index}>
                          <List>{item}</List>
                        </div>
                      );
                    })}
                  </ContentRight>
                </SchoolWrapper>
              </ContentRight>
            </SchoolWrapper>
          </DegreeWrapper>
          <DegreeWrapper className="JMSB">
            <Degree>{education[2].degree}</Degree>
            <SchoolWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <Strong>{education[2].school}</Strong>
                <Strong>{education[2].program}</Strong>
                <div style={{ marginTop: "3px", marginBottom: "1px" }}>
                  <P>Coursework:</P>
                </div>
                <SchoolWrapper>
                  <LeftBar></LeftBar>
                  <ContentRight>
                    {education[2].list.map((item, index) => {
                      return (
                        <div key={index}>
                          <List>{item}</List>
                        </div>
                      );
                    })}
                  </ContentRight>
                </SchoolWrapper>
              </ContentRight>
            </SchoolWrapper>
          </DegreeWrapper>
          <DegreeWrapper className="LFZ">
            <Degree>{education[3].degree}</Degree>
            <SchoolWrapper>
              <LeftBar></LeftBar>
              <ContentRight>
                <Strong>{education[3].school}</Strong>
                <Strong>
                  {education[3].program} <P>{education[3].programLowercase}</P>
                </Strong>
              </ContentRight>
            </SchoolWrapper>
          </DegreeWrapper>
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

const DegreeWrapper = styled.div``;

const Degree = styled.h3`
  font-weight: 600;
  text-transform: uppercase;
  margin: 25px 0px 10px 0px;
`;

const SchoolWrapper = styled.div`
  display: grid;
  grid-template-columns: 2px 1fr;
  grid-gap: 12px;
`;

const LeftBar = styled.div`
  height: auto;
  width: 2px;
  background-color: black;
  grid-column: 1/2;
  border-radius: 2000px;
`;

const ContentRight = styled.div`
  grid-column: 2/3;
`;

const Strong = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
`;

const P = styled.span`
  font-weight: 300;
  margin: 3px 0px;
`;

const List = styled.p`
  font-weight: 300;
  margin: 0px;
`;

export default Education;
