import React from "react"
import styled from "styled-components"
import Icon from "../atoms/icon"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"
import FileIcon from "../../images/file.inline.svg"
import SaveIcon from "../../images/download.inline.svg"

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

  p {
    max-height: 24px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    
    p {
      max-height: none;
      -webkit-line-clamp: initial;
      -webkit-box-orient: initial;
      overflow: visible;
    }
  }
`

const FileSave = ({ data, mb }) => (
  <Wrapper href={data.plik.localFile.publicURL} target="_blank" mb={mb}>
    <FlexBox align="center">
      <Icon size="32px">
        <FileIcon />
      </Icon>
      <Text typography={typography.button} color={color.white} m="0 16px">{data.plik.localFile.name + data.plik.localFile.ext}</Text>
    </FlexBox>
    <FlexBox align="center">
      <Text typography={typography.button} color={color.white} nowrap m="0 16px 0 auto" mMD="0 16px">{((data.plik.localFile.size / 1024).toFixed(2) + " KB")}</Text>
      <Icon size="32px">
        <SaveIcon />
      </Icon>
    </FlexBox>
  </Wrapper>
)

export default FileSave
