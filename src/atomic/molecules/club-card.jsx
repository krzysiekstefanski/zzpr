import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"
import FacebookSVG from "../../images/facebook.inline.svg"
import WebsiteSVG from "../../images/website.inline.svg"

const Wrapper = styled(FlexBox)`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${color.neutral20};
  padding: 16px;
  border-radius: 4px;

  i, p {
    position: relative;
  }

  img {
    width: 100%;
  }

  svg {
    margin-right: 8px;
  }

  a {
    text-decoration: none;
  }
`

const ClubCard = ({ data, icon, dataId }) => (
  <Wrapper column data-id={dataId} p="24px">
    <FlexBox width="100%" mb="16px">
      <img src={data.plik.localFile.publicURL} />
    </FlexBox>
    <Text typography={typography.h400} color={color.white}>{data.klubyListaNazwa}</Text>
    {data.klubyListaFacebook ?
      <FlexBox as="a" href={data.klubyListaFacebook} target="_blank" align="center" width="100%" m="16px 0 0">
        <FacebookSVG />
        <Text typography={typography.button} color={color.white}>Facebook</Text>
      </FlexBox> :
      null}
    {data.klubyListaWebsite ?
      <FlexBox as="a" href={data.klubyListaWebsite} target="_blank" align="center" width="100%" m={data.klubyListaFacebook ? "4px 0 0" : "16px 0 0"}>
        <WebsiteSVG />
        <Text typography={typography.button} color={color.white}>Strona internetowa</Text>
      </FlexBox> :
      null}
  </Wrapper>
)

export default ClubCard
