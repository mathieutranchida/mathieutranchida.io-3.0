import React from "react";
import styled from "styled-components";

import { SiGmail, SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = (props) => {
  return (
    <Wrapper>
      <Div>
        <A
          href="https://github.com/mathieutranchida"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHub />
        </A>
        <A
          href="https://www.linkedin.com/in/mathieutranchida/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn />
        </A>
        <A
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mathieu.tranchida@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Gmail />
        </A>
        <A
          href="https://www.instagram.com/mathieutranchida/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram />
        </A>
      </Div>
      <P>MATHIEU TRANCHIDA - 2021 ALL RIGHTS RESERVED ©</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const P = styled.div`
  font-size: 0.6rem;
  font-weight: 300;
  margin-top: 10px;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 25px 25px 25px 25px;
  grid-column-gap: 25px;
  grid-template-rows: 25px;
`;

const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  opacity: 1;
`;

const GitHub = styled(FiGithub)`
  height: 100%;
  width: 100%;
  color: black;
`;

const LinkedIn = styled(FaLinkedinIn)`
  height: 100%;
  width: 100%;
  color: black;
`;

const Gmail = styled(SiGmail)`
  height: 100%;
  width: 100%;
  color: black;
`;

const Instagram = styled(SiInstagram)`
  height: 100%;
  width: 100%;
  color: black;
`;

export default SocialMedia;
