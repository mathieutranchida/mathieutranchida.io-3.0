import React from "react";
import styled from "styled-components";

const skills = [
  {
    list: "Languages:",
    content: "French (native), English (fluent), Spanish (Beginner)",
  },
  {
    list: "Softwares:",
    content:
      " MS Office Suite, Excel, Photoshop, Lightroom, Illustrator, InDesign, Premiere Pro, XD, Figma, VS Code",
  },
  {
    list: "Web Technologies:",
    content:
      " HTML, CSS, JavaScript, React, Redux, Shopify, Liquid, WordPress, Mailchimp, SEOs, SQL, NoSQL, Stripe, Git, GitHub, GreenSock, Webpacks, WooCommerce",
  },
  {
    list: "Content Creation:",
    content:
      " Photography, Video Production, Web Design, Web Development, Social Media Graphic Design",
  },
];

const Skills = () => {
  return (
    <>
      <Wrapper>
        <Header>Skills</Header>
        <Main>
          <ListType>{skills[0].list}</ListType>
          <ListItem>{skills[0].content}</ListItem>
          <ListType>{skills[1].list}</ListType>
          <ListItem>{skills[1].content}</ListItem>
          <ListType>{skills[2].list}</ListType>
          <ListItem>{skills[2].content}</ListItem>
          <ListType>{skills[3].list}</ListType>
          <ListItem>{skills[3].content}</ListItem>
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
  margin: 12px 0px;
`;

const Main = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: 160px 1fr;
  row-gap: 3px;
  @media (max-width: 400px) {
    grid-template-columns: 110px 1fr;
  }
`;

const ListType = styled.p`
  font-weight: 500;
  margin: 0px;
`;

const ListItem = styled.p`
  font-weight: 300;
  margin: 0px;
`;

export default Skills;
