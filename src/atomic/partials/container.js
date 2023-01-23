import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Wrapper = styled.div`
  display: ${props => props.flex ? "flex" : ""};
  flex-direction: ${props => props.column ? "column" : ""};
  justify-content: ${props => props.justify ? props.justify : ""};
  align-items: ${props => props.align ? props.align : ""};
  order: ${props => props.order ? props.order : ""};
  position: ${props => props.position ? props.position : "relative"};
  width: 100%;
  max-width: 568px;
  //   padding-left: 30px;
  //   padding-right: 30px;
  padding-left: ${props => props.noPadding ? "" : "15px"};
  padding-right: ${props => props.noPadding ? "" : "15px"};
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: ${props => props.columnMD ? "column" : props.directionMD ? props.directionMD : ""};
    order: ${props => props.orderMD ? props.orderMD : ""};
    max-width: 768px;
  }

  @media (min-width: 992px) {
    max-width: 900px;
  }

  @media (min-width: 992px) {
    max-width: 100%;
    // padding-left: 15px;
    // padding-right: 15px;
  }

  @media (min-width: ${props => props.width}px) {
    max-width: ${props => props.width}px;
  }
`

const Container = ({ flex, column, directionMD, justify, align, children, style, width, className, id, position, noPadding, ...rest}) => (
  <Wrapper style={style} flex={flex} column={column} directionMD={directionMD} justify={justify} align={align} width={width} className={className} id={id} position={position} noPadding={noPadding} {...rest}>
    {children}
  </Wrapper>
)

export default Container

Container.propTypes = {
  width: PropTypes.number,
}

Container.defaultProps = {
  width: 1270,
}
