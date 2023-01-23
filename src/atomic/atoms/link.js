import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { link } from "../../components/general-config"
import { color } from "../../components/colors"

const Component = styled.a`
  display: ${props => props.display ?? 'flex'};
  ${props => (props.typography ? props.typography : link.typography ? link.typography : "")}
  align-items: center;
  color: ${props => (props.color ? props.color : color.white)};
  padding: ${props => props.padding};
  padding-top: ${props => props.pt};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
  margin: ${props => props.margin};
  margin: ${props => props.m ? props.m : link.margin ? link.margin : "" };
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-left: ${props => (props.ml ? props.ml : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
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
    margin-top: ${props => (props.mtMD ? props.mtMD : "")};
    margin-left: ${props => (props.mlMD ? props.mlMD : "")};
    margin-right: ${props => (props.mrMD ? props.mrMD : "")};
    margin-bottom: ${props => (props.mbMD ? props.mbMD : "")};
  }

  &:hover {
    color: ${color.red40};
  }
`;

const Link = ({ className, onClick, text, children, href, flex, typography, color, center, align, pl, m, mt, ml, mr, mb, mbMD, noParser, target, rel }) => (
  <Component className={className} onClick={onClick} href={href} flex={flex} typography={typography} color={color} center={center} align={align} pl={pl} m={m} mt={mt} ml={ml} mr={mr} mb={mb} mbMD={mbMD} noParser={noParser} target={target} rel={rel}>
    { text ? parse(text) : children }
  </Component>
)

export default Link