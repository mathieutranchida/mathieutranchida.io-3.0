import React from "react";
import styled from "styled-components";

const Bio = () => {
  return (
    <>
      <Wrapper>
        My objective is to contribute to the execution of digital marketing
        initiatives to drive business results. Eager to work on marketing
        automation, web platform optimization, content creation, and customer
        engagement through digital touchpoints. My business education and
        thorough understanding of web technologies are strong assets to
        translate business goals into successful marketing campaigns.
      </Wrapper>
    </>
  );
};

const Wrapper = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: justify;
  margin-top: 60px;
  margin-bottom: 0px;
  @media (max-width: 500px) {
    text-align: left !important;
  }
`;

const Strong = styled.span`
  font-weight: 600;
`;

export default Bio;
