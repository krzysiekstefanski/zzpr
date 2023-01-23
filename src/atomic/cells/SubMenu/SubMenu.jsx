import React from "react"
import styled from "styled-components"
import { color } from "../../../components/colors"

const Component = styled.ul`
  display: none;
  flex-direction: column;
  width: ${props => props.width ?? '100%'};
  background-color: ${props => props.backgroundColor ?? color.neutral00};
  list-style: none;
  padding: 16px;
  position: ${props => props.position ?? 'absolute'};
  top: ${props => props.top ?? '45px'};
  left: ${props => props.left ?? '0'};
  z-index: 1;

  &.active {
    display: flex;
  }

  a {
    padding: 8px;
  }

  @media (min-width: 769px) {
    width: auto;
    background-color: ${props => props.backgroundColorMD};
    position: ${props => props.positionMD ?? 'absolute'};
    left: -16px;
    &.contact {
        left: auto;
        right: -16px;
      }
  }
`

const SubMenu = ({ className, children, ...rest }) => (
    <Component className={className} {...rest}>
        {children}
    </Component>
)

export default SubMenu