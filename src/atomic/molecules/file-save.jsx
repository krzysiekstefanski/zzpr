import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"
import FileIcon from "../../images/file.inline.svg"
import SaveIcon from "../../images/download.inline.svg"

const Wrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${color.neutral20};
  padding: 12px 16px;
  border-radius: 4px;
  text-decoration: none;
`

const FileSave = ({ data, icon, dataId }) => (
  <Wrapper href={data.linkDoPliku.localFile.publicURL} target="_blank">
    <FlexBox align="center">
      <Icon size="32px">
        <FileIcon />
      </Icon>
      <Text typography={typography.button} color={color.white} center m="0 16px 0">{data.linkDoPliku.localFile.name + data.linkDoPliku.localFile.ext}</Text>
    </FlexBox>
    <FlexBox align="center">
      <Text typography={typography.button} color={color.white} center m="0 16px 0">{((data.linkDoPliku.localFile.size / 1024).toFixed(2) + " KB")}</Text>
      <Icon size="32px">
        <SaveIcon />
      </Icon>
    </FlexBox>
  </Wrapper>
)

export default FileSave
