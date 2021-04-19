import React from "react";
import styled from "styled-components";

const images = [
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-9_fj9lko.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781274/mathieutranchida.com/portfolio/best/portfolio_best_website-5_xzqgev.jpg",
    athleteName: "Will Berman",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-7_icktqm.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781274/mathieutranchida.com/portfolio/best/portfolio_best_website-6_vnn3gh.jpg",
    athleteName: "Remco Kayser",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781274/mathieutranchida.com/portfolio/best/portfolio_best_website-4_wgg0ct.jpg",
    athleteName: "Remco Kayser",
  },
  // {
  //   imageSrc:
  //     "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-10_tlhxxj.jpg",
  //   athleteName: "Lysanne Richard & Yves Millord",
  // },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-2_jednhj.jpg",
    athleteName: "Unknown climbers",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-8_dk88ov.jpg",
    athleteName: "Bea Evans",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781274/mathieutranchida.com/portfolio/best/portfolio_best_website-1_ikyqqb.jpg",
    athleteName: "Vincent Authier",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dldqebddc/image/upload/v1616781275/mathieutranchida.com/portfolio/best/portfolio_best_website-3_anvp7x.jpg",
    athleteName: "Zoe Beauchemin",
  },
];

const Portfolio = () => {
  return (
    <>
      <Wrapper>
        <Gallery>
          {images.map((image) => {
            return (
              <div key={image.imageSrc}>
                <Image
                  src={image.imageSrc}
                  draggable="false"
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            );
          })}
        </Gallery>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0px -10px 0px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  margin-bottom: 10px;
  user-select: none;
  z-index: -1;
  @media (max-width: 800px) {
    max-height: none;
  }
`;

export default Portfolio;
