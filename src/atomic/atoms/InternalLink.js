import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import { link } from "../../components/general-config"
import { color } from "../../components/colors"

const Wrapper = styled(Link)`
  display: ${props => props.display ? props.display : "flex"};
  ${props => (props.typography ? props.typography : link.typography ? link.typography : "")}
  color: ${props => (props.color ? props.color : color.white)};
  padding: ${props => props.padding};
  padding-top: ${props => props.pt};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
  margin: ${props => props.margin};
  margin: ${props => props.m ?? link.margin};
  margin-top: ${props => props.mt};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  text-decoration: none;
  transition: color 0.3s ease;

  @media (min-width: 769px) {
    display: ${props => props.displayMD};
    padding: ${props => props.paddingMD};
    padding-top: ${props => props.ptMD};
    padding-left: ${props => props.plMD};
    padding-right: ${props => props.prMD};
    padding-bottom: ${props => props.pbMD};
    margin: ${props => props.marginMD};
    margin-top: ${props => props.mtMD};
    margin-left: ${props => props.mlMD};
    margin-right: ${props => props.mrMD};
    margin-bottom: ${props => props.mbMD};
  }

  &:hover {
    color: ${color.red40};
  }
`;

const InternalLink = ({ className, text, children, to, display, typography, color, center, align, pl, m, mt, ml, mr, mb, mbMD, noParser, target, rel }) => (
  <Wrapper className={className} to={to} display={display} typography={typography} color={color} center={center} align={align} pl={pl} m={m} mt={mt} ml={ml} mr={mr} mb={mb} mbMD={mbMD} noParser={noParser} target={target} rel={rel}>
    { children }
  </Wrapper>
)

export default InternalLink