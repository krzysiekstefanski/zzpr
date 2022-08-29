import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import SectionTitle from "../../atoms/section-title";
import Text from "../../atoms/text";
import Icon from "../../atoms/icon";
import HexesSVG from "../../../images/hexes.inline.svg"
import DotsSVG from "../../../images/dots.inline.svg"
import CrossSVG from "../../../images/cross.inline.svg"

const HomepageAboutSection = ({ data }) => (
  <About id="o-nas">
    <Icon icon={<HexesSVG />} hidden showMD height="382px" width="268px" absolute right="0" bottom="0"/>
    <Container>
      <Content>
        <FlexBox className="content-left" hidden showMD width="100%" widthMD="49.6%" pr="30px" prLG="123px" relative>
          <ImgWrapper>
            <Icon icon={<DotsSVG />} hidden showLG height="116px" width="336px" absolute left="-32px" bottom="-38px"/>
            <Icon icon={<CrossSVG />} height="24px" width="24px" absolute top="31px" left="15px"/>
            <Icon icon={<CrossSVG />} height="16px" width="16px" absolute top="55px" right="160px"/>
          <Img fixed={data.oNasZdjecie.localFile.childImageSharp.fluid} />
          </ImgWrapper>
        </FlexBox>
        <FlexBox className="content-right" direction="column" justify="center" align="flex-start" width="100%" widthMD="50.4%" p="20px 0 0">
          <SectionTitle title={data.oNasTytul} upperline lineWidth="48px" />
          <Text text={data.oNasTekst} />
        </FlexBox>
      </Content>
    </Container>
  </About>
);

export default HomepageAboutSection

const About = styled.section`
  width: 100%;
  position: relative;
  padding: 48px 0 24px;

  @media (min-width: 769px) {
    padding: 140px 0 70px;
  }
`

const Content = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content-left {
    .gatsby-image-wrapper {
      overflow: visible !important;
      display: none !important;

      @media (min-width: 769px) {
        display: block !important;
      }

      picture {
        display: flex;
        justify-content: center;
        align-center: center;
        width: 100%;

        &::before {
          content: '';
          display: block;
          padding-top: 100%;
        }
      }

      img {
        border-radius: 1000px 1000px 24px 1000px;
        overflow: hidden;
        object-position: 77% center !important;
      }

      &::before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        background-color: ${color.green60};
        box-shadow: 0px 10px 20px rgba(90, 116, 203, 0.2);
        border-radius: 1000px 1000px 24px 1000px;
        position: absolute;
        bottom: -20px;
        left: -30px;
        z-index: -1;
      }
    }
  }
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
`;