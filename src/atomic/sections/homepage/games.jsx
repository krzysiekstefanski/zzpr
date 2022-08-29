import React, { useState } from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import SectionTitle from "../../atoms/section-title";
import WhiteBox from "../../atoms/white-box";
import ServicesBoxes from "../../organisms/services-boxes";
//import { Parallax, Background } from "react-parallax"

const Games = styled.section`
  width: 100%;
  position: relative;
  padding: 24px 0 16px;

  @media (min-width: 769px) {
    padding: 90px 0 18px;
  }
`

const GamesSection = ({ data }) => {
  return (
    <Games id="rodzaje-rozgrywek">
      <Container>
        <SectionTitle title="Rodzaje rozgrywek" />
        <ServicesBoxes data={data} />
      </Container>
    </Games>
  )
}
export default GamesSection