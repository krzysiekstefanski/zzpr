import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.columns ? props.columns : "")};
  grid-gap: ${props => (props.gap ? props.gap : "")};
  width: ${props => (props.width ? props.width : "")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
  padding: ${props => margin(props.p ? props.p : "")};
  padding-right: ${props => props.pr ? `${props.pr}px` : ""};
  padding-left: ${props => props.pl ? `${props.pl}px` : ""};
  margin: ${props => margin(props.m ? props.m : "")};
  margin-bottom: ${props => props.mb ? props.mb : ""};

  @media (min-width: 576px) {
    grid-template-columns: ${props => (props.columnsSM ? props.columnsSM : "")};
    width: ${props => (props.widthSM ? props.widthSM : "")};
  }

  @media (min-width: 769px) {
    grid-template-columns: ${props => (props.columnsMD ? props.columnsMD : "")};
    width: ${props => (props.widthMD ? props.widthMD : "")};
    padding: ${props => margin(props.pMD ? props.pMD : "")};
    padding-right: ${props => props.prMD ? `${props.prMD}px` : ""};
  }

  @media (min-width: 992px) {
    grid-template-columns: ${props => (props.columnsLG ? props.columnsLG : "")};
    width: ${props => (props.widthLG ? props.widthLG : "")};
    padding: ${props => margin(props.pLG ? props.pLG : "")};
    padding-right: ${props => props.prLG ? `${props.prLG}px` : ""};
  }

  @media (min-width: 1366px) {
    grid-template-columns: ${props => (props.columnsXL ? props.columnsXL : "")};
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

const Grid = ({ className, children, ...rest }) => {
	return (
		<Wrapper className={className} {...rest}>
			{children}
		</Wrapper>
	);
};

export default Grid;