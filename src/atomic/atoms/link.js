import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { link } from "../../components/general-config"
import { color } from "../../components/colors"

const Wrapper = styled.a`
  display: ${props => (props.flex ? "flex" : "")};
  ${props => (props.typography ? props.typography : link.typography ? link.typography : "")}
  color: ${props => (props.color ? props.color : color.white)};
  padding-left: ${props => (props.pl ? (props.pl === "auto" ? "auto" : `${props.pl}`) : "")};
  margin: ${props => props.m ? props.m : link.margin ? link.margin : "" };
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  text-decoration: none;
  transition: color 0.3s ease;

  @media (min-width: 769px) {
    margin-bottom: ${props => (props.mbMD ? (props.mbMD === "auto" ? "auto" : `${props.mbMD}`) : "")};
  }

  &:hover {
    color: ${color.blue60};
  }
`;

const Link = ({ className, text, children, href, flex, typography, color, center, align, pl, m, mt, ml, mr, mb, mbMD, noParser, target, rel }) => (
  <Wrapper className={className} href={href} flex={flex} typography={typography} color={color} center={center} align={align} pl={pl} m={m} mt={mt} ml={ml} mr={mr} mb={mb} mbMD={mbMD} noParser={noParser} target={target} rel={rel}>
    { text ? parse(text) : null }
    
    { noParser && children ? children : !noParser && children ? parse(children) : null }

  </Wrapper>
)

export default Link