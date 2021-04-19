import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Header from "../../components/header";
import { FiChevronLeft } from "react-icons/fi";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";

const PhotoPortfolio = () => {
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <BackHome
          onClick={() => {
            history.push("/");
          }}
        >
          <Left />
          Resume
        </BackHome>
        <Main>
          <Header />
          <Intro />
        </Main>
        <Second>
          <Portfolio />
        </Second>
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
  padding: 100px 50px 0px 50px;
`;

const Second = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 0px 50px 50px 50px;
  @media (max-width: 800px) {
    max-height: none;
    padding: 0px 0px 100px 0px;
  }
`;

const BackHome = styled.button`
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  font-family: montserrat, sans-serif;
  text-transform: uppercase;
  font-size: 1.7rem;
  font-weight: 400;
  padding: 15px 5px;
  position: fixed;
  top: 0px;
  left: 0px;
  cursor: pointer;
  @media (max-width: 1400px) {
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Left = styled(FiChevronLeft)`
  color: black;
  height: 2rem;
  width: 2rem;
`;

export default PhotoPortfolio;
