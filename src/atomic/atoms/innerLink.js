import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import parse from "html-react-parser"
import { link } from "../../components/general-config"
import { color } from "../../components/colors"
import {typography } from "../../components/typography"

const Wrapper = styled(Link)`
  display: ${props => (props.flex ? "flex" : "")};
  ${props => (props.typography ? typography[props.typography] : link.typography ? link.typography : "")}
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
    color: ${color.red40};
  }
`;

const InnerLink = ({ className, text, children, to, flex, typography, color, center, align, pl, m, mt, ml, mr, mb, mbMD, noParser, target, rel }) => (
  <Wrapper className={className} to={to} flex={flex} typography={typography} color={color} center={center} align={align} pl={pl} m={m} mt={mt} ml={ml} mr={mr} mb={mb} mbMD={mbMD} noParser={noParser} target={target} rel={rel}>
    {/* { text ? parse(text) : null }
    
    { noParser && children ? children : !noParser && children ? parse(children) : null } */}
    {children}
  </Wrapper>
)

export default InnerLink