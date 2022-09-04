import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import Icon from "../atoms/icon"
import Whitebox from "../atoms/white-box"
import Text from "../atoms/text"
import { color } from "../../components/colors"
import { FlexBox } from "../../components/flexbox"
import { typography } from "../../components/typography"

const Employer = styled(FlexBox)`
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: ${color.neutral20};
  padding: 16px;
  border-radius: 4px;

  i, p {
    position: relative;
  }
`

const Card = ({ data, dataId }) => (
  <Employer column center data-id={dataId}>
    <Icon size="64px" mb="16px">
      <img src={data.uslugiIkona.sourceUrl} />
    </Icon>
    <Text typography={typography.button} color={color.white} center>{data.uslugiOpis}</Text>
  </Employer>
)

export default Card
