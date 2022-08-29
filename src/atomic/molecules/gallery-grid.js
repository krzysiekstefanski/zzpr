import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { shadow } from "../../components/shadows"
import VisibilitySensor from "../../components/VisibilitySensor"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 230px;
  grid-gap: 30px;
  width: 100%;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .big,
  .small {
    position: relative;
    transition: transform 0.3s ease;
    box-shadow: ${shadow.white1};
    border-radius: 5px;
    cursor: pointer;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 5px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      position: absolute;
    }

    &:hover {
      transform: scale(1.02);

      &::before {
        opacity: 1;
      }
    }
  }

  .big {
    @media (min-width: 769px) {
      grid-area: 1 / 1 / 3 / 3;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    border-radius: 5px;
    //position: static !important;

    & > div {
      padding-bottom: 66% !important;
    }
  }
`

const GalleryGrid = ({ className, images, clickHandler }) => (
  <Wrapper className={className}>
    {images &&
      images.map((image, i) => (
        <div
        className="small"
          //className={i === 0 ? "big" : "small"}
          onClick={e => clickHandler(e, image.galeriaKategoriaZdjecia.localFile.childImageSharp.fluid)}
        >
          <VisibilitySensor partialVisibility once>
            {({ isVisible }) => (
              <Img
                className={isVisible ? `${slide(i)} enter` : slide(i)}
                fixed={image.galeriaKategoriaZdjecia.localFile.childImageSharp.fluid}
              />
            )}
          </VisibilitySensor>
        </div>
      ))}
  </Wrapper>
)

const slide = i => {
  switch (i) {
    case 0: {
      return "slideRight"
    }
    case 1: {
      return "slideLeft"
    }
    case 2: {
      return "slideLeft"
    }
    default:
      return "slideUp"
  }
}

export default GalleryGrid
