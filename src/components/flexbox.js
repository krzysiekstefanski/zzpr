import styled from "styled-components";

export const FlexBox = styled.div`
  display: ${props => (props.hidden ? "none" : "flex")};
  flex-direction: ${props => (props.column ? "column" : props.direction ? props.direction : "row")};
  justify-content: ${props => (props.center ? "center" : props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.center ? "center" : props.align ? props.align : "flex-start")};
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  flex-grow: ${props => (props.grow ? props.grow : "")};
  gap: ${props => (props.gap ? props.gap : "")};
  height: ${props => (props.height ? props.height : "")};
  width: ${props => (props.width ? props.width : "")};
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}` : "")};
  background-color: ${props => (props.backgroundColor ? `${props.backgroundColor}` : "")};
  padding: ${props => margin(props.p ? props.p : "")};
  padding-top: ${props => props.pt ? `${props.pt}` : ""};
  padding-right: ${props => props.pr ? `${props.pr}` : ""};
  padding-left: ${props => props.pl ? `${props.pl}` : ""};
  margin: ${props => margin(props.m ? props.m : "")};
  margin-bottom: ${props => props.mb ? `${props.mb}` : ""};
  position: ${props => props.relative ? "relative" : ""};
  
  @media (min-width: 576px) {
    justify-content: ${props => (props.justifySM ? props.justifySM : "")};
    width: ${props => (props.widthSM ? props.widthSM : "")};
    align-items: ${props => (props.centerSM && (props.direction === "column") ? "center" : props.alignSM ? props.alignSM : "")};
  }

  @media (min-width: 769px) {
    display: ${props => (props.showMD ? "flex" : "")};
    flex-direction: ${props => (props.directionMD ? props.directionMD : "")};
    justify-content: ${props => (props.justifyMD ? props.justifyMD : "")};
    align-items: ${props => (props.centerMD && (props.direction === "column") ? "center" : props.alignMD ? props.alignMD : "")};
    width: ${props => (props.widthMD ? props.widthMD : "")};
    padding: ${props => margin(props.pMD ? props.pMD : "")};
    padding-right: ${props => props.prMD ? props.prMD : ""};
    margin-bottom: ${props => props.mbMD ? props.mbMD : ""};
  }

  @media (min-width: 992px) {
    flex-direction: ${props => (props.directionLG ? props.directionLG : "")};
    justify-content: ${props => (props.justifyLG ? props.justifyLG : "")};
    align-items: ${props => (props.centerLG && (props.direction === "column") ? "center" : props.alignLG ? props.alignLG : "")};
    width: ${props => (props.widthLG ? props.widthLG : "")};
    padding: ${props => margin(props.pLG ? props.pLG : "")};
    padding-right: ${props => props.prLG ? `${props.prLG}` : ""};
  }

  @media (min-width: 992px) {
    flex-direction: ${props => (props.directionXL ? props.directionXL : "")};
    align-items: ${props => (props.centerXL && (props.direction === "column") ? "center" : props.alignXL ? props.alignXL : "")};
    padding-left: ${props => props.plXL ? `${props.plXL}px` : ""};
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }  
`

const margin = margin => {
  if (typeof margin === "string") {
    return margin
  } else if (typeof margin === "number") {
    if (margin === 1) {
      return "3px"
    } else if (margin === 2) {
      return "8px"
    } else if (margin === 3) {
      return "15px"
    } else if (margin === 4) {
      return "30px"
    } else if (margin === 5) {
      return "48px"
    } else if (margin === 6) {
      return "72px"
    } else {
      return "0"
    }
  } else {
    return "0"
  }
}