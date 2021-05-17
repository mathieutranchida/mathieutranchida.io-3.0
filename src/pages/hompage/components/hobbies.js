import React from "react";
import styled from "styled-components";

const hobbies =
  "Skiing. Climbing. Biking. Hiking. Spending time outdoors. Taking pictures. Watching movies. Following the latest tech trends. Playing video games. Learning new skills. Developing websites. Spending time with friends and family. Reading.";

const Hobbies = () => {
  return (
    <>
      <Wrapper>
        <Header>Hobbies</Header>
        <Main>
          <P>{hobbies}</P>
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
`;

const P = styled.p`
  font-weight: 300;
  margin: 0px;
`;

export default Hobbies;
