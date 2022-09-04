import React from "react"
import styled from "styled-components"
import parse from "html-react-parser"
import { color } from "../../components/colors"

const Title = styled.h3`
  font-family: Albert Sans, sans-serif;
  font-size: 20px;
  line-height: 32px;
  color: ${props => (props.color ? props.color : `${color.white}`)};
  text-align: ${props => (props.center ? "center" : props.align ? props.align : "")};
  padding-bottom: ${props => (props.pb ? (props.pb === "auto" ? "auto" : `${props.pb}px`) : "")};
  margin: ${props => (props.m ? props.m : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  position: relative;

  @media (min-width: 769px) {
    padding-bottom: ${props => (props.pbLG ? props.pbLG : "")};
    margin-bottom: ${props => (props.mbMD ? props.mbMD : "")};
  }
`;

const Heading = ({ className, text, children, size, color, center, align, pb, pbLG, m, mr, mb, mbMD, underline }) => (
  <Title as={size ? `h${size}` : null} className={className} color={color} center={center} align={align} pb={pb} pbLG={pbLG} m={m} mr={mr} mb={mb} mbMD={mbMD} underline={underline}>
    {text ? parse(text) : null}
    {children}
  </Title>
)

export default Heading
