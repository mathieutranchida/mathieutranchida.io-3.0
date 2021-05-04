import React from "react";
import styled from "styled-components";

const Bio = () => {
  return (
    <>
      <Wrapper>
        <Strong>
          Bringing digital marketing, technology, and content creation together.
        </Strong>{" "}
        My business education and thorough understanding of web technologies
        enable me to{" "}
        <Strong>
          adapt marketing strategies to the digital needs and achieve their full
          potential
        </Strong>
        . Having created content and developed websites for years,{" "}
        <Strong>
          I understand the challenges and limitations driving the web
        </Strong>
        , allowing me to{" "}
        <Strong>communicate with developers and other creators</Strong>. Looking
        for a full-time position.
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
