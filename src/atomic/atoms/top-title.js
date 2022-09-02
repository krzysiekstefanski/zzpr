import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { topHeader } from "../../components/general-config"
import { color } from "../../components/colors"

const Heading = styled.h2`
  width: ${props => props.width ? props.width : "" };
  ${props => (props.typography ? props.typography : topHeader.typography ? props.size ? topHeader.typography[props.size - 1] : topHeader.typography[topHeader.size - 1] : "")}
  color: ${props => (props.color ? props.color : `${topHeader.color}`)};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  text-transform: ${topHeader.textTransform ? topHeader.textTransform : ""};
  padding: ${props => props.p ? props.p : topHeader.padding ? topHeader.padding : "" };
  padding-top: ${props => (props.pt ? (props.pt === "auto" ? "auto" : `${props.pt}`) : "")};
  padding-bottom: ${props => (props.pb ? (props.pb === "auto" ? "auto" : `${props.pb}`) : "")};
  margin: ${props => props.m ? props.m : topHeader.margin ? topHeader.margin : "" };
  margin-right: ${props => (props.mr ? (props.mr === "auto" ? "auto" : `${props.mr}`) : "")};
  margin-bottom: ${props => (props.mb ? (props.mb === "auto" ? "auto" : `${props.mb}`) : "")};
  text-transform: ${topHeader.textTransform ? topHeader.textTransform : ""};
  position: ${topHeader.position ? topHeader.position : ""};

  span {
    color: ${topHeader.secondaryColor};
  }

  @media (min-width: 769px) {
    padding: ${props => props.pMD ? props.pMD : "" };
    padding-bottom: ${props => (props.pbMD ? (props.pbMD === "auto" ? "auto" : `${props.pbMD}`) : "")};
    marign: ${props => props.mMD ? props.mMD : "" };
    margin-bottom: ${props => (props.mbMD ? (props.mbMD === "auto" ? "auto" : `${props.mbMD}`) : "")};
  }

  &::before {
    display: block;
    height: ${props => topHeader.lineHeight ? topHeader.lineHeight : props.lineHeight ? props.lineHeight : "4px" };
    width: ${props => topHeader.lineWidth ? topHeader.lineWidth : props.lineWidth ? props.lineWidth : "100%" };
    border-radius: 10px;
    background-color: ${topHeader.lineColor};
    position: absolute;
    top: ${props => topHeader.upperline || props.upperline ? "0" : ""};
    bottom: ${props => topHeader.underline || props.underline ? "0" : ""};
    left: ${props => props.lineCenter ? "50%" : ""};
    transform: ${props => props.lineCenter ? "translateX(-50%)" : ""};
  }

  ${props => topHeader.underline || props.underline ? `
    &::before {
      content: '';
    }
  ` : ""}

  ${props => topHeader.upperline || props.upperline ? `
    &::before {
      content: '';
    }
  ` : ""}
  
`;

const SectionTitle = ({ className, size, title, children, width, typography, color, center, align, uppercase, p, pt, pb, pbLG, m, mr, mb, mbMD, underline, upperline, lineHeight, lineWidth, lineCenter }) => (
  <Heading className={className} as={`h${size ? size : topHeader.size}`} size={size} width={width} typography={typography} color={color} center={center} align={align} uppercase={uppercase} p={p} pb={pb} pt={pt} pbLG={pbLG} m={m} mr={mr} mb={mb} mbMD={mbMD} underline={underline} upperline={upperline} lineHeight={lineHeight} lineWidth={lineWidth} lineCenter={lineCenter}>
    {title ? parse(title) : null}
    {children ? parse(children) : null}
  </Heading>
)

export default SectionTitle
