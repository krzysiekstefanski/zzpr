import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"
import SectionTitle from "../atoms/section-title"
import AvatarSVG from "../../images/avatar-placeholder.inline.svg"

const Employer = styled(FlexBox)`
  position: relative;
  width: 100%;
  max-width: 310px;
  margin-bottom: 48px;
  align-items: center;
  margin: 0 auto 48px;

  @media (min-width: 769px) {
    align-items: flex-start;
    margin: 0 0 48px;
  }

    i, p {
      position: relative;
    }
`;

const Image = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  border: 4px solid #ECF9F2;
  border-radius: 32px;
  box-shadow: 0px 12px 24px rgba(63, 192, 127, 0.25);
  overflow: hidden;
  margin-bottom: 24px;
`;

const Badge = styled.span`
  background: #B2E6CC;
  border-radius: 8px;
  padding: 2px 8px;
  margin-bottom: 16px;
`;

const CardTeam = ({ data, icon, dataId }) => (
  <Employer column maxWidth="260" prMD="40px" data-id={dataId}>
    {console.log(data)}
    
    <Image>
    {data.kadraKategoriaZdjecie ?
      <Img fixed={data.kadraKategoriaZdjecie.localFile.childImageSharp.fluid} /> : 
    // <StaticImage
    //   src="../../images/avatar-green.png"
    //   quality={85}
    //   formats={["AUTO", "WEBP", "AVIF"]}
    //   alt="A Gatsby astronaut"
    // />
    <AvatarSVG />}
    </Image>
    {data.kadraKategoriaImie ? <SectionTitle size="4" typography={typography.heading} p="0" mb="8px">{data.kadraKategoriaImie}</SectionTitle> : null}
    {data.kadraKategoriaGabinet ? <Badge>{data.kadraKategoriaGabinet}</Badge> : null}
    {data.kadraKategoriaStanowisko ? <Text typography={typography.bodyS} color={color.neutral20} center alignMD="left">{data.kadraKategoriaStanowisko}</Text> : null}
  </Employer>
)

export default CardTeam
