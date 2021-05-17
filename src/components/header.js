import React from "react";
import styled from "styled-components";

import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiInstagram } from "react-icons/si";
import { FiGithub, FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderReactive>
          <div>
            <Name>Mathieu Tranchida</Name>
            <SecondLine>
              Interested in Marketing{" "}
              <SecondLineSpan>
                | Eligible to work in Canada and Europe
              </SecondLineSpan>
            </SecondLine>
          </div>
          <SocialMediaWrapper>
            <TelephoneWrapper>
              <PhoneNumber>+1 (438) 927-7693</PhoneNumber>
              <PhoneLogo />
            </TelephoneWrapper>
            <A
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mathieu.tranchida@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gmail <Gmail />
            </A>
            <A
              href="https://www.linkedin.com/in/mathieutranchida/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn <LinkedIn />
            </A>
            <A
              href="https://www.instagram.com/mathieutranchida/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram <Instagram />
            </A>
            <A
              href="https://github.com/mathieutranchida"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub <GitHub />
            </A>
          </SocialMediaWrapper>
        </HeaderReactive>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const HeaderReactive = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: 2.6rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0px 0px 0px 0px;
  letter-spacing: 2px;
  @media (max-width: 400px) {
    font-size: 10vw;
  }
`;

const SecondLine = styled.h3`
  margin: 0px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const SecondLineSpan = styled.span`
  text-transform: none;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 840px) {
    display: none;
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
  margin-top: 3px;
  color: black;
  font-size: 0.85rem;
  text-decoration: none;
  font-weight: 300;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

const GitHub = styled(FiGithub)`
  height: 12px;
  width: 12px;
  color: black;
  margin-left: 6px;
`;

const LinkedIn = styled(FaLinkedinIn)`
  height: 12px;
  width: 12px;
  color: black;
  margin-left: 6px;
`;

const Gmail = styled(SiGmail)`
  height: 12px;
  width: 12px;
  color: black;
  margin-left: 6px;
`;

const Instagram = styled(SiInstagram)`
  height: 12px;
  width: 12px;
  color: black;
  margin-left: 6px;
`;

const TelephoneWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

const PhoneLogo = styled(FiPhone)`
  height: 12px;
  width: 12px;
`;

const PhoneNumber = styled.div`
  font-size: 0.85rem;
  margin-right: 6px;
  font-weight: 300;
`;

export default Header;
