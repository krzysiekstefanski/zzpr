import React from "react"
import styled from "styled-components"
import { color } from "../../components/colors"

const Line = styled.span`
    display: block;
    height: 1px;
    width: ${props => (props.width ? props.width : "100%")};
    border-top: 1px solid ${props => (props.color ? props.color : color.green00)};
    position: ${props => (props.position ? props.position : "absolute")};
    top: calc(50% - 1px);
    right: 16px;
`
const HorizontalLine = ({ width, position, color }) => <Line width={width} position={position} color={color} />;

export default HorizontalLine