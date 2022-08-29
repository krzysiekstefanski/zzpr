import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { color } from "../components/colors"
import { footer } from "../components/general-config"
import LogoSVG from "../images/logo-zzpr.inline.svg"
import Container from "../atomic/partials/container"

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${footer.backgroundColor};
  padding: 21px 0;
`

const Copyright = styled.span`
  ${footer.typography ? footer.typography : null}
  color: ${footer.color};
  text-align: center;
`

const Author = styled.a`
  ${footer.typography ? footer.typography : null}
  color: ${footer.color};
  text-decoration: none;
  transition: color 0.3s ease;
`

const LogoWrapper = styled(Link)`
  width: 100%;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Albert Sans, sans-serif;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  mix-blend-mode: lighten;

  @media (min-width: 576px) {
    max-width: 140px;
  }

  @media (min-width: 992px) {
    max-width: 207px;
  }

  span {
    font-size: 32px;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Container flex column directionMD="row" justify="space-between" align="center">
        <LogoWrapper to="/">
          <LogoSVG />
        </LogoWrapper>
        <Copyright align={"center"} p={"0 0 15px"}>
          © {new Date().getFullYear()} Wszystkie prawa zastrzeżone.
          {' '}
          <span style={{ whiteSpace: "nowrap" }}>Realizacja:
            {' '}
            <Author
              href="https://www.facebook.com/webscris"
              target="_blank"
              rel="noreferrer"
            >
              Cris
            </Author>
          </span>
        </Copyright>
      </Container>
    </Wrapper>
  )
}

export default Footer
