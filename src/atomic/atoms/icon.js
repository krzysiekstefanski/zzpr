import React from "react"
import styled from "styled-components"

const SVG = styled.span`
  display: ${props => (props.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  height: ${props => (props.size ? props.size : (props.height ? props.height : "24px"))};
  width: ${props => (props.size ? props.size : (props.width ? props.width : "24px"))};
  min-height: ${props => (props.size ? props.size : (props.height ? props.height : "24px"))};
  min-width: ${props => (props.size ? props.size : (props.width ? props.width : "24px"))};
  max-height: ${props => (props.size ? props.size : (props.height ? props.height : "24px"))};
  max-width: ${props => (props.size ? props.size : (props.width ? props.width : "24px"))};
  background-color: ${props => (props.background ? props.background : "")};
  border: ${props => (props.border ? props.border : "")};
  border-radius: ${props => (props.radius ? props.radius : "")};
  box-shadow: ${props => (props.shadow ? props.shadow : "")};
  padding: ${props => (props.p ? props.p : "")};
  margin-top: ${props => (props.mt ? props.mt : "")};
  margin-right: ${props => (props.mr ? props.mr : "")};
  margin-bottom: ${props => (props.mb ? props.mb : "")};
  position: ${props => (props.relative ? props.relative : props.absolute ? "absolute" : "")};
  top: ${props => (props.top ? props.top : "")};
  left: ${props => (props.left ? props.left : "")};
  right: ${props => (props.right ? props.right : "")};
  bottom: ${props => (props.bottom ? props.bottom : "")};
  z-index: ${props => (props.index ? props.index : "")};

  @media (min-width: 769px) {
    display: ${props => (props.showMD ? "flex" : "")};
    top: ${props => (props.topMD ? props.topMD : "")};
  }

  @media (min-width: 992px) {
    display: ${props => (props.showLG ? "flex" : "")};
  }

  svg {
      height: 100%;
      width: 100%;

      path {
          fill: ${props => (props.color ? props.color : "")};
      }
  }

  img {
    height: auto;
    width: 100%;
  }
`

const Icon = ({ children, icon, hidden, showMD, showLG, size, height, width, background, color, border, radius, shadow, p, mt, mr, mb, relative, absolute, top, topMD, left, right, bottom, index}) => (
<SVG hidden={hidden} showMD={showMD} showLG={showLG} size={size} height={height} width={width} background={background} color={color} border={border} radius={radius} shadow={shadow} p={p} mt={mt} mr={mr} mb={mb} relative={relative} absolute={absolute} top={top} topMD={topMD} left={left} right={right} bottom={bottom} index={index}>
    {icon ? icon : null}
    {children ? children : null}
</SVG>
) 

export default Icon
