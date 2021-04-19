import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <>
      <Wrapper>
        <Header>Photography portfolio</Header>
        <Main>
          <P>
            On the side of my studies, I have done a variety of projects with
            global brands and media outlets such as Arc'teryx, L'Équipe, CBC,
            and RDS.
          </P>
          <P>
            The experience I got from photography will be very helpful in my
            career as a digital marketer. I learned to create content in a way
            that is aligned to a brand's image and marketing needs. Furthermore,
            I have also gained a great understanding of what goes on behind the
            scenes of the content creation world. I have worked with producers,
            filmmakers, and designers, amongst others; Allowing me to understand
            what they do, what they charge, and how they operate.
          </P>
          <P>
            Today, photography is a passion that I practice when I have time on
            the side of my main activity.
          </P>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    margin-top: 40px;
  }
`;

const Header = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  margin: 20px 0px 10px 0px;
`;

const Main = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
`;

const P = styled.p`
  margin: 10px 0px;
  text-align: justify;
`;

export default Intro;
