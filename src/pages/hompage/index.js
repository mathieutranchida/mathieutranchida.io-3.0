import React from "react";
import styled from "styled-components";

import Header from "../../components/header";
import Bio from "./components/bio";
import WorkExperience from "./components/work";
import Education from "./components/education";
import Skills from "./components/skills";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Header />
          <Bio />
          <WorkExperience />
          <Education />
          <Skills />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Main = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 100px 50px 75px 50px;
`;

export default Homepage;
