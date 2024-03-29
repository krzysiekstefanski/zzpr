import React from "react"
import styled from "styled-components"
import Icon from "../atoms/icon"
import Text from "../atoms/text"
import Heading from "../atoms/heading";
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"
import FileIcon from "../../images/file.inline.svg"
import ArrowRightIcon from "../../images/arrow-right-red.inline.svg"

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: ${color.neutral20};
  padding: 12px 16px;
  border-radius: 4px;
  text-decoration: none;
  margin-bottom: ${props => (props.mb ? props.mb : "")};

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`

const SquadFile = ({ data, mb }) => (
  <Wrapper href={data.kadraplikilink.localFile.publicURL} target="_blank" mb={mb}>
    <FlexBox align="center" m="0 0 16px" mMD="0">
      <Icon hidden showMD size="32px">
        <FileIcon />
      </Icon>
      <Text typography={typography.bodyM} color={color.white} m="0 16px 0 8px">{data.kadraplikinazwa}</Text>
    </FlexBox>
    <FlexBox align="center">
      <Text typography={typography.button} color={color.white} nowrap m="0 4px 0">Sprawdź</Text>
      <ArrowRightIcon />
    </FlexBox>
  </Wrapper>
)

export default SquadFile
