import React from "react";
import styled from "styled-components";
import { color } from "../../components/colors";
import { shadow } from "../../components/shadows";

const Box = styled.div`
	display: ${(props) => (props.flex ? "flex" : "")};
	flex-direction: ${(props) => props.column ? "column" : ""};
	justify-content: ${(props) => props.center ? "center" : props.justify ? props.justify : ""};
	align-items: ${(props) => props.center ? "center" : props.align ? props.align : ""};
	width: ${(props) => (props.width ? `${props.width}px` : "100%")};
	min-width: ${(props) => (props.width ? `${props.width}px` : "")};
	max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "")};
	background-color: ${(props) => (props.hideBox ? "" : color.white)};
	box-shadow: ${(props) => (props.hideBox ? "" : "8px 8px 64px rgba(180, 180, 180, 0.2)")};
	border-radius: ${(props) => (props.hideBox ? "" : "5px")};
	overflow: ${(props) => (props.overflow ? "hidden" : "")};
	padding: ${(props) => (props.p ? props.p : "")};
	padding-top: ${(props) => (props.pt ? props.pt : "")};
	margin: ${(props) => (props.m ? props.m : "")};
	margin-bottom: ${(props) => (props.bottomMargin ? props.bottomMargin : "")};
	margin-bottom: ${(props) => (props.mb ? props.mb : "")};

	@media (min-width: 769px) {
		flex-direction: ${(props) => props.rowMD ? "row" : ""};
		background-color: ${(props) => (props.showBoxMD ? color.white : "")};
		box-shadow: ${(props) => (props.showBoxMD ? "8px 8px 64px rgba(180, 180, 180, 0.2)" : "")};
		border-radius: ${(props) => (props.showBoxMD ? "5px" : "")};
		padding-top: ${(props) => (props.ptMD ? props.ptMD : "")};
	}

	@media (min-width: 992px) {
		margin-bottom: ${(props) => (props.mbXL ? `${props.mbXL}px` : "")};
	}
`;

const Whitebox = ({ className, children, flex, column, justify, align, center, overflow, maxWidth, p, pt,...rest }) => {
	return (
		<Box className={className} flex={flex} column={column} justify={justify} align={align} center={center} maxWidth={maxWidth} overflow={overflow} p={p} pt={pt} {...rest}>
			{children}
		</Box>
	);
};

export default Whitebox;
