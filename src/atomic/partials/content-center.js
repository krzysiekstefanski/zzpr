import React from "react"
import styled from "styled-components"
import Container from "./container"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  align-items: center;
  width: 100%;
  position: ${props => (props.relative ? "relative" : "")};
  overflow: ${props => (props.overflow ? props.overflow : "")};

  @media (min-width: 769px) {
    flex-direction: ${props => (props.directionMD ? props.directionMD : "")};
    max-width: ${props =>
      props.contentWidth ? `${props.contentWidth}px` : ""};
    overflow: visible;
  }
`

const ContentCenter = ({
  className,
  children,
  contentWidth,
  headlineWidth,
  textWidth,
  relative,
  overflow,
  direction,
  directionMD,
  ...rest
}) => {
  return (
    <Container>
      <Wrapper className={className} {...rest}>
        <Content
          contentWidth={contentWidth}
          headlineWidth={headlineWidth}
          textWidth={textWidth}
          relative={relative}
          overflow={overflow}
          direction={direction}
          directionMD={directionMD}
        >
          {children}
        </Content>
      </Wrapper>
    </Container>
  )
}

export default ContentCenter
