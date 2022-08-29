import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
import Container from "../../partials/container";
import { color } from "../../../components/colors"
import { FlexBox } from "../../../components/flexbox"
import SectionTitle from "../../atoms/section-title";
import Text from "../../atoms/text";
import Link from "../../atoms/link";
import Icon from "../../atoms/icon"
import CircleSVG from "../../../images/circle.inline.svg"
import HexesSVG from "../../../images/hexes-2.inline.svg"
import { typography } from "../../../components/typography"
import GooglePlaySVG from "../../../images/googleplay.inline.svg"
import AppStoreSVG from "../../../images/appstore.inline.svg"
import Button from "../../atoms/button";

const HomepageInfoSection = ({ data }) => {
  return (
    <Info id="info">
      <Icon icon={<CircleSVG />} height="634px" width="318px" absolute top="-122px" right="0"/>
      <Icon icon={<HexesSVG />} height="382px" width="188px" absolute left="0" bottom="123px"/>
      <Container>
        <Content>
          <FlexBox className="content-right" direction="column" justify="center" align="flex-start" width="100%" widthMD="50.4%" p="20px 0 0">
            <SectionTitle title={data.infoTytul} upperline lineWidth="48px" />
            <Text size="20" interline="30" mb="56px">
              {data.infoTekst}
            </Text>
            <FlexBox center mb="32px">
              <FlexBox center height="54px" width="54px">
                <StaticImage
                  src="../../../images/VM_logo_02.png"
                  quality={85}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="A Gatsby astronaut"
                />
              </FlexBox>
              <Link href="https://visimed.osoz.pl/#pobierz" typography={typography.h400} pl="24px">Aplikacja VisiMed</Link>
            </FlexBox>
            <FlexBox center mb="72px">
              <Link href="https://play.google.com/store/apps/details?id=com.kamsoft.zap&referrer=utm_source%3DVisiMed%26utm_medium%3Dwww%26anid%3Dadmob" mr="24px" noParser target="_blank" rel="noopener noreferrer">
                <Icon height="40px" width="auto">
                  <GooglePlaySVG />
                </Icon>
              </Link>
              <Link href="https://apple.co/3d5qVX4" noParser target="_blank" rel="noopener noreferrer">
                <Icon height="40px" width="auto">
                  <AppStoreSVG />
                </Icon>
              </Link>
            </FlexBox>
            <Button
              content={{
                text: "Poradnik korzystania z aplikacji",
                url:
                  "https://www.youtube.com/watch?v=OIxW4lS1tHg",
              }}
              radius="56px"
              p="12px 20px"
              pSM="14px 26px"
              pMD="16px 32px"
              m="0 auto 70px 0"
              arrow
              tel
              target="_blank"
            />
          </FlexBox>
          <FlexBox className="content-left" width="100%" widthMD="49.6%">
            <Img fixed={data.infoZdjecie.localFile.childImageSharp.fluid} />
          </FlexBox>
        </Content>
      </Container>
    </Info>
  )
}

export default HomepageInfoSection

const Info = styled.section`
  width: 100%;
  position: relative;
  padding: 24px 0;
  

  @media (min-width: 769px) {
    padding: 70px 0 50px;
  }
`

const Content = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  max-width: 1030px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .content-left {
    .gatsby-image-wrapper {
      transform: translateX(100px);
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
      }

      img {
        object-fit: contain !important;
      }
    }
  }
`