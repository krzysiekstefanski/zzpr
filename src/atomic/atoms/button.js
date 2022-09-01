import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { button } from "../../components/general-config"
import PropTypes from "prop-types"

const Wrapper = styled(Link)`
  ${props => (props.typography ? props.typography : button.typography ? button.typography : "")}
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : button.height ? button.height : "")};
  width: 100%;
  background-color: ${props => props.theme === "secondary" ? button.backgroundColor[1] : button.backgroundColor[0]};
  border: 2px solid ${button.backgroundColor[0]};
  border-radius: ${props => (props.radius ? props.radius : "10px")};
  color: ${props => props.theme === "secondary" ? button.backgroundColor[0] : button.color};
  text-align: center;
  text-decoration: none;
  position: relative;
  padding: ${props => (props.p ? props.p : "20px")};
  margin: ${props => (props.m ? props.m : "")};
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  @media (min-width: 340px) {
    ${props => (props.typographyXXS ? props.typographyXXS : button.typographyXXS ? button.typographyXXS : "")}
    padding: ${props => (props.pXXS ? props.pXXS : "")};
  }

  @media (min-width: 380px) {
    ${props => (props.typographyXS ? props.typographyXS : button.typographyXS ? button.typographyXS : "")}
    padding: ${props => (props.pXS ? props.pXS : "")};
  }

  @media (min-width: 576px) {
    ${props => (props.typographySM ? props.typographySM : button.typographySM ? button.typographySM : "")}
    width: auto;
    white-space: ${props => (props.wrap ? "" : "nowrap")};
    max-width: ${props => props.width ? props.width : button.width ? button.width : ""};
    padding: ${props => (props.pSM ? props.pSM : "")};
    margin: ${props => (props.mSM ? props.mSM : "")};
  }

  @media (min-width: 769px) {
    ${props => (props.typographyMD ? props.typographyMD : button.typographyMD ? button.typographyMD : "")}
    padding: ${props => (props.pMD ? props.pMD : "")};
    margin: ${props => (props.mMD ? props.mMD : "")};
  }

  @media (min-width: 992px) {
    margin: ${props => (props.mLG ? props.mLG : "")};
  }

  @media (min-width: 992px) {
    margin: ${props => (props.mXL ? props.mXL : "")};
  }

  &:hover {
    background-color: ${props => props.theme === "secondary" ? button.backgroundColor[0] : button.backgroundColor[1]};
    border-color: ${button.backgroundColor[0]};
    color: ${props => props.theme === "secondary" ? button.backgroundColor[1] : button.backgroundColor[0]};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    width: 34px;
    background-color: #fff;
    border-radius: 10px;
    color: ${button.backgroundColor[1]};
    margin-left: 20px;
  }
`

const Button = ({
  content,
  id,
  className,
  theme,
  typography,
  height,
  width,
  arrow,
  arrow2,
  radius,
  m,
  mSM,
  mMD,
  mLG,
  p,
  wrap,
  onClick,
  target,
  tel,
}) => (
  <Wrapper
    id={id}
    className={className}
    to={!tel ? (content.url ? content.url : content) : null}
    href={tel ? (content.url ? content.url : content) : null}
    typography={typography}
    height={height}
    width={width}
    arrow={arrow}
    arrow2={arrow2}
    theme={theme}
    radius={radius}
    p={p}
    m={m}
    mSM={mSM}
    mMD={mMD}
    mLG={mLG}
    wrap={wrap}
    onClick={onClick}
    target={target}
    tel={tel}
  >
    {content.text}
  </Wrapper>
)

export default Button

Button.propTypes = {
  width: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  content: {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  },
}

Button.defaultProps = {
  rel: "noopener noreferrer nofollow",
  target: "_blank",
  content: {
    text: "Start Your Business with Us, Today!",
    url: "/",
  },
}
