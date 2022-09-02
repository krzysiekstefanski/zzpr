import React from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import Button from "../../atoms/button";
import Heading from "../../atoms/top-title";
import Text from "../../atoms/text";
import { typography } from "../../../components/typography"

const HomepageTopSection = ({ data }) => (
  <Top id="home">
    <Overlay className="top-overlay">
      <Container className="top-content">
        <Content>
          <Heading size="1" mb="32px">Zachodniopomorski Związek Piłki Ręcznej
            w Szczecinie</Heading>
          <Text typography={typography.bodyL} mb="80px">Zapoznaj się z najnowszymi informacjami i sprawdź terminarze nadchodzących spotkań.</Text>
          <Button
            content={{
              text: "Sprawdź",
              url:
                "#wydarzenia",
            }}
            radius="27px"
            p="14px 53px"
            m="0 auto 0 0"
          />
        </Content>
        <TopImage>
          <Img fixed={data.zdjecieGlowneObraz.localFile.childImageSharp.fluid} />
        </TopImage>
      </Container>
    </Overlay>
  </Top>
)

export default HomepageTopSection

const Top = styled.section`
  width: 100%;
  position: relative;
  background-color: ${color.black};
`

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vw;

  .top-content {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }


  &.form-overlay {
    padding: 100px 0 60px;
    position: static;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px 15px 15px 0;
  
  @media (min-width: 769px) {
    width: 50%;
    max-width: 610px;
    padding: 90px 0 110px;
    marign-right: auto;
  }
`;

const TopImage = styled.div`
  display: none;
  justify-content: center;
  align-items: flex-end;
  width: 50%;
  max-width: 570px;
  padding: 15px 0 125px 15px;
  position: relative;
  
  @media (min-width: 769px) {
    display: flex;
  }

  .gatsby-image-wrapper {
    height: 948px;
    width: 50vw;
    position: absolute !important;
    top: 0;
    left: 3%;

    img {
      object-fit: contain !important;
      object-position: center bottom !important;
      mix-blend-mode: lighten;
    }
  }
`;