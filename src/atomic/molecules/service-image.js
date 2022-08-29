import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import HorizontalLine from "../atoms/horizontal-line";
import { color } from "../../components/colors";

const Wrapper = styled.div`
  display: flex;  
  width: 100%;
  position: relative;

  @media (min-width: 567px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 25%;
    //height: 670px;
  }

  .custom-bg { 
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      
      .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
      }
  }

  .service-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease
  }

  &:hover {
    .service-overlay {
        background-color: ${color.blue40};

        h3 {
          min-height: 0;
        }
    
        p {
          height: auto;
        }
    }
}
`

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  width: 100%;
  padding: 32px;

  @media (min-width: 576px) {
    padding: 40px;
  }

  @media (min-width: 769px) {
    padding: 56px;
  }
  
  h3 {
    //min-height: 121px;
    color: #fff;
    font-size: 20px;
    line-height: 1.1;
    padding: 16px 0;

    @media (min-width: 576px) {
      font-size: 24px;
    }

    @media (min-width: 769px) {
      font-size: 32px;
    }
  }

  p {
    overflow: hidden;
    transition: height 0.3s ease;
    color: ${color.green40};

    @media (min-width: 992px) {
      height: 0;
    }
  }
`

const ServiceImage = ({ data }) => (
  <Wrapper>
    <div className="custom-bg">
      <Img fixed={data.ofertaRodzajeUslugZdjecie.localFile.childImageSharp.fluid} />
    </div>
    <Overlay className="service-overlay">
      <HorizontalLine width="25%" position="static" color={color.green40} />
      <h3>{data.ofertaRodzajeUslugNazwa}</h3>
      {/* {parse(data.ofertaRodzajeUslugOpis)} */}
    </Overlay> 
  </Wrapper>
)

export default ServiceImage
