import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { header } from "../../components/general-config"
import { color } from "../../components/colors"

const Heading = styled.h2`
  width: ${props => props.width ? props.width : "" };
  ${props => (props.typography ? props.typography : header.typography ? props.size ? header.typography[props.size - 1] : header.typography[header.size - 1] : "")}
  color: ${props => (props.color ? props.color : `${header.color}`)};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  text-transform: ${header.textTransform ? header.textTransform : ""};
  padding: ${props => props.p ? props.p : header.padding ? header.padding : "" };
  padding-top: ${props => (props.pt ? (props.pt === "auto" ? "auto" : `${props.pt}`) : "")};
  padding-bottom: ${props => (props.pb ? (props.pb === "auto" ? "auto" : `${props.pb}`) : "")};
  margin: ${props => props.m ? props.m : header.margin ? header.margin : "" };
  margin-right: ${props => (props.mr ? (props.mr === "auto" ? "auto" : `${props.mr}`) : "")};
  margin-bottom: ${props => (props.mb ? (props.mb === "auto" ? "auto" : `${props.mb}`) : "")};
  text-transform: uppercase;
  position: ${header.position ? header.position : ""};

  span {
    color: ${header.secondaryColor};
  }

  @media (min-width: 769px) {
    padding: ${props => props.pMD ? props.pMD : "" };
    padding-bottom: ${props => (props.pbMD ? (props.pbMD === "auto" ? "auto" : `${props.pbMD}`) : "")};
    marign: ${props => props.mMD ? props.mMD : "" };
    margin-bottom: ${props => (props.mbMD ? (props.mbMD === "auto" ? "auto" : `${props.mbMD}`) : "")};
  }

  &::before {
    display: block;
    height: ${props => header.lineHeight ? header.lineHeight : props.lineHeight ? props.lineHeight : "4px" };
    width: ${props => header.lineWidth ? header.lineWidth : props.lineWidth ? props.lineWidth : "100%" };
    border-radius: 10px;
    background-color: ${header.lineColor};
    position: absolute;
    top: ${props => header.upperline || props.upperline ? "0" : ""};
    bottom: ${props => header.underline || props.underline ? "0" : ""};
    left: ${props => props.lineCenter ? "50%" : ""};
    transform: ${props => props.lineCenter ? "translateX(-50%)" : ""};
  }

  ${props => header.underline || props.underline ? `
    &::before {
      content: '';
    }
  ` : ""}

  ${props => header.upperline || props.upperline ? `
    &::before {
      content: '';
    }
  ` : ""}
  
`;

const SectionTitle = ({ size, title, children, width, typography, color, center, align, p, pt, pb, pbLG, m, mr, mb, mbMD, underline, upperline, lineHeight, lineWidth, lineCenter }) => (
  <Heading as={`h${size ? size : header.size}`} size={size} width={width} typography={typography} color={color} center={center} align={align} p={p} pb={pb} pt={pt} pbLG={pbLG} m={m} mr={mr} mb={mb} mbMD={mbMD} underline={underline} upperline={upperline} lineHeight={lineHeight} lineWidth={lineWidth} lineCenter={lineCenter}>
    {title ? parse(title) : null}
    {children ? parse(children) : null}
  </Heading>
)

export default SectionTitle
