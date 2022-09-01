import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { text } from "../../components/general-config"
import { color } from "../../components/colors"

const Paragraph = styled.p`
  ${props => (props.typography ? props.typography : text.typography ? text.typography : "")}
  color: ${props => (props.color ? props.color : color.neutral60)};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  padding-left: ${props => (props.pl ? (props.pl === "auto" ? "auto" : `${props.pl}`) : "")};
  padding-right: ${props => (props.pr ? (props.pr === "auto" ? "auto" : `${props.pr}`) : "")};
  margin: ${props => props.m ? props.m : text.margin ? text.margin : "" };
  margin-bottom: ${props => (props.mb ? (props.mb === "auto" ? "auto" : `${props.mb}`) : "")};
  white-space: ${props => (props.nowrap ? "nowrap" : "")};
  
  @media (min-width: 769px) {
    text-align: ${props => (props.centerMD ? "center" : props.alignMD ? props.alignMD : "")};
    margin-bottom: ${props => (props.mbMD ? (props.mbMD === "auto" ? "auto" : `${props.mbMD}`) : "")};
  }

  a {
    display: block;
    ${props => (props.linkTypography ? props.linkTypography : text.linkTypography ? text.linkTypography : "")}
    color: ${color.blue40};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${color.blue60};
    }

    @media (min-width: 992px) {
      display: inline;
    }
  }
`;

const Text = ({ className, text, children, typography, linkTypography, color, center, align, alignMD, nowrap, pl, pr, m, mb, mbMD }) => (
  <Paragraph className={className} typography={typography} linkTypography={linkTypography} color={color} center={center} align={align} alignMD={alignMD} nowrap={nowrap} pl={pl} pr={pr} m={m} mb={mb} mbMD={mbMD}>
    { text ? parse(text) : null }
    { children ? parse(children) : null }
  </Paragraph>
)

export default Text
