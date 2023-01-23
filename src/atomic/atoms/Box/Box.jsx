import React from "react";
import styled from "styled-components";

const Component = styled.div`
  display: ${(props) => props.display ?? 'flex'};
  flex-direction: ${(props) =>
        props.column ? 'column' : props.direction ?? 'row'};
  flex-wrap: ${(props) => props.wrap};
  grid-template-columns: ${(props) => props.columns};
  gap: ${(props) => props.gap};
  order: ${(props) => props.order};
  justify-content: ${(props) =>
        props.center && props.direction !== 'column' ? 'center' : props.justify};
  justify-self: ${(props) => props.justifySelf};
  justify-items: ${(props) => props.justifyItems};
  align-items: ${(props) =>
        props.center && props.direction === 'column' ? 'center' : props.align};
  flex-wrap: ${(props) => props.wrap};
  flex-grow: ${(props) => props.grow};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  width: ${(props) => props.width};
  max-width: ${(props) => props.max};
  min-width: ${(props) => props.min};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-top: ${(props) => props.borderTop};
  border-width: ${(props) => props.borderWidth};
  border-style: ${(props) =>
        props.borderStyle ?? (props.borderWidth && 'solid')};
  border-color: ${(props) => props.borderColor};
  border-radius: ${(props) => props.radius};
  transition: ${(props) => props.transition};
  transform: ${(props) => props.transform};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  overflow: ${(props) => props.overflow};
  box-shadow: ${(props) => props.shadow};
  opacity: ${(props) => props.opacity};
  z-index: ${(props) => props.zIndex};
  cursor: ${(props) => props.cursor};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${(props) =>
        props.square &&
        `&::after {
			content: "";
			display: block;
			padding-bottom: 100%;
		}`}
  @media (max-width: 374px) {
    padding: ${(props) => props.paddingXS};
    gap: ${(props) => props.gapXS};
  }
  @media (min-width: 576px) {
    display: ${(props) => props.displaySM};
    flex-direction: ${(props) => props.directionSM};
    grid-template-columns: ${(props) => props.columnsSM};
    justify-content: ${(props) => props.justifySM};
    align-items: ${(props) => props.alignSM};
    gap: ${(props) => props.gapSM};
    order: ${(props) => props.orderSM};
    height: ${(props) => props.heightSM};
    min-height: ${(props) => props.minHeightSM};
    max-height: ${(props) => props.maxHeightSM};
    width: ${(props) => props.widthSM};
    max-width: ${(props) => props.maxSM};
    background-color: ${(props) => props.backgroundColorSM};
    border: ${(props) => props.borderSM};
    border-radius: ${(props) => props.radiusSM};
    padding: ${(props) => props.paddingSM};
    margin: ${(props) => props.marginSM};
    position: ${(props) => props.positionSM};
    top: ${(props) => props.topSM};
    left: ${(props) => props.leftSM};
    right: ${(props) => props.rightSM};
    bottom: ${(props) => props.bottomSM};
    box-shadow: ${(props) => props.shadowSM};
  }
  @media (min-width: 769px) {
    display: ${(props) => props.displayMD};
    flex-direction: ${(props) => props.directionMD};
    grid-template-columns: ${(props) => props.columnsMD};
    justify-content: ${(props) => props.justifyMD};
    align-items: ${(props) => props.alignMD};
    gap: ${(props) => props.gapMD};
    order: ${(props) => props.orderMD};
    height: ${(props) => props.heightMD};
    width: ${(props) => props.widthMD};
    min-width: ${(props) => props.minMD};
    max-width: ${(props) => props.maxMD};
    background-color: ${(props) => props.backgroundColorMD};
    padding: ${(props) => props.paddingMD};
    margin: ${(props) => props.marginMD};
    position: ${(props) => props.positionMD};
    top: ${(props) => props.topMD};
    bottom: ${(props) => props.bottomMD};
    right: ${(props) => props.rightMD};
    left: ${(props) => props.leftMD};
    border-radius: ${(props) => props.radiusMD};
    box-shadow: ${(props) => props.shadowMD};
  }
  @media (min-width: 1280px) {
    display: ${(props) => props.displayLG};
    flex-direction: ${(props) => props.directionLG};
    grid-template-columns: ${(props) => props.columnsLG};
    justify-content: ${(props) => props.justifyLG};
    align-items: ${(props) => props.alignLG};
    gap: ${(props) => props.gapLG};
    order: ${(props) => props.orderLG};
    height: ${(props) => props.heightLG};
    min-height: ${(props) => props.minHeightLG};
    max-height: ${(props) => props.maxHeightLG};
    width: ${(props) => props.widthLG};
    max-width: ${(props) => props.maxLG};
    background-color: ${(props) => props.backgroundColorLG};
    transform: ${(props) => props.transformLG};
    padding: ${(props) => props.paddingLG};
    margin: ${(props) => props.marginLG};
    position: ${(props) => props.positionLG};
    left: ${(props) => props.leftLG};
    top: ${(props) => props.topLG};
    bottom: ${(props) => props.bottomLG};
    right: ${(props) => props.rightLG};
    border-radius: ${(props) => props.radiusLG};
    box-shadow: ${(props) => props.shadowLG};
    overflow: ${(props) => props.overflowLG};
  }
  @media (min-width: 1440px) {
    padding: ${(props) => props.paddingXL};
  }
  @media (min-height: 576px) {
    padding: ${(props) => props.paddingSMH};
  }
  @media (min-height: 768px) {
    padding: ${(props) => props.paddingMDH};
    height: ${(props) => props.heightMDH};
  }
  @media (min-height: 847px) {
    padding: ${(props) => props.paddingLGH};
  }
`;

const Box = ({ className, children, ...rest }) => {
    return (
        <Component className={className} {...rest}>
            {children}
        </Component>
    );
};

export default Box;