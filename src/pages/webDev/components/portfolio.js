import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const webDevelopment = [
  {
    video: "https://youtu.be/OV-pgbO35rM",
    text: {
      title: "E-Commerce Photography Website",
      paragraph: [
        "Fully responsive e-commerce application with a functioning store, cart, payment, and order confirmation for the user. The administrator has access to a protected portal where he can create, update, and delete products. There, he also has access to an order management system.",
        "The store offers various images that can be bought in different sizes and types of paper. Each cart is saved on a MongoDB database and can be retrieved using a unique ID assigned to each user's local storage. The payment system was created using Stripe.",
        "Technologies used: React, JavaScript, Redux, Node.js, CSS, MongoDB, Stripe, Email.js, Cloudinary, Bcrypt, Json Web Tokens",
      ],
      gitHubLink: "GitHub repository",
    },
    link: "https://github.com/mathieutranchida/Mathieu-Tranchida-Website",
  },
  {
    video: "https://www.youtube.com/watch?v=7FnkZZTPXW4",
    text: {
      title: "Road Rage",
      paragraph: [
        "Javascript game where the user entered a highway the wrong way and has to avoid upcoming cars. As the game progresses, the user scores points, and the cars gain a random speed every 10 seconds.",
        "This was a project for my diploma at Concordia Bootcamps.",
        "Technologies used: HTML, CSS, JavaScript",
      ],
    },
    link: "https://github.com/mathieutranchida/project-m2-nyan-cat",
  },
  {
    video: "https://www.youtube.com/watch?v=uP6MGWLTat0",
    text: {
      title: "Slingshot Airlines",
      paragraph: [
        "Functional airline booking website where the user can choose a unique flight and seat. The user can also see his profile, confirmation, and reservation after buying it.",
        "This was a project for my diploma at Concordia Bootcamps.",
        "Technologies used: React, JavaScript, Node.js, Express, HTML, CSS",
      ],
    },
    link: "https://github.com/mathieutranchida/project-m4-slingair",
  },
  {
    video: "https://www.youtube.com/watch?v=LGrr_AkTSlY",
    text: {
      title: "Twitter clone",
      paragraph: [
        "Partially functioning Twitter clone with feed, profile, post, like, and repost features.",
        "This was a project for my diploma at Concordia Bootcamps.",
        "Technologies used: React, Redux, JavaScript, Node.js, Express, HTML, CSS",
      ],
    },
    link: "https://github.com/mathieutranchida/project-m5-twitter-clone",
  },
  {
    video: "https://www.youtube.com/watch?v=9yIv7FQP2UA",
    text: {
      title: "Vincent Authier Athlete Website",
      paragraph: [
        "Landing page intended to present Vincent Authier as an athlete and put him in relation with potential sponsors and clients.",
        "This app is exclusively front-end and heavily based on GSAP and ScrollTriggers animations. The text reveals itself as you scroll down on the website. The website's sides are made of continuous text moving up and down as the user scrolls (animated using GSAP). The gallery is made with a CSS grid and is fully responsive to the smartphone size.",
        "Technologies used: React, JavaScript, HTML, CSS, Email.js, GSAP, ScrollTriggers",
      ],
    },
    link: "https://github.com/mathieutranchida/vincent-authier-website",
  },
];

const WebDevelopment = () => {
  return (
    <>
      <Wrapper>
        {webDevelopment.map((project, index) => {
          return (
            <div key={index}>
              <Title>{project.text.title}</Title>
              {project.text.paragraph.map((item, index) => {
                return (
                  <div key={index}>
                    <Description>{item}</Description>
                  </div>
                );
              })}
              <Link
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub repository
              </Link>
              <VideoWrapper>
                <Video width="100%" height="100%" url={project.video} />
              </VideoWrapper>
            </div>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 75px;
`;

const Description = styled.p`
  margin: 0px;
  font-size: 0.9rem;
  font-weight: 300;
  margin: 10px 0px;
`;

const Link = styled.a`
  color: black;
  font-size: 0.9rem;
  font-weight: 300;
  &:hover {
    text-decoration: none;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: auto;
  height: auto;
  margin-bottom: 50px;
  margin-top: 15px;
`;

const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export default WebDevelopment;
