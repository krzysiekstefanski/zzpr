import * as React from "react"
import { Link } from "gatsby"
import { Parallax, Background } from "react-parallax"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Container from "../atomic/partials/container"
import { color } from "./colors"

const Top = styled.section`
  width: 100%;
  position: relative;

  .react-parallax {
    height: 300px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }

    .gatsby-image-wrapper img {
      top: 50%;
      left: 50%;
      width: auto;
      object-fit: cover;
      object-position: center center;
      transform: translate(-50%, -50%);
    }
  }

  .react-parallax-background-children {
    width: 100%;
    top: -230px;
  }
`

const Overlay = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &.top-overlay {
    display: flex;
    flex-direction: column;
    padding-top: 70px;

    .top-content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 576px) {
        justify-content: flex-end;
      }
    }
  }

  &.form-overlay {
    padding: 100px 0 60px;
    position: static;
  }
`

const LogoWrapper = styled(Link)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 576px) {
    left: 0;
    transform: none;
    max-width: 180px;
  }

  @media (min-width: 992px) {
    max-width: 320px;
  }
`

const MenuWrapper = styled.nav`
  width: 100%;
`

const NavList = styled.ul`
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  list-style: none;
  margin: 0;

  @media (min-width: 992px) {
    display: flex;
  }

  li {
    margin-bottom: 0;

    a {
      color: #fff;
      font-size: 16px;
      font-height: 1;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${color.blue40};
      }
    }
  }

  li:not(:last-child) {
    margin-right: 12px;

    @media (min-width: 992px) {
      margin-right: 16px;
    }
  }
`

const TopSub = () => (
  <Top>
    <Parallax strength={300}>
      <Background className="custom-bg">
        <StaticImage
          src="../images/bg_05.jpg"
          quality={85}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
      </Background>
    </Parallax>
    <Overlay className="top-overlay">
      <Container className="top-menu">
        <LogoWrapper to="/">
          <StaticImage
            src="../images/logo.png"
            quality={85}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
          />
        </LogoWrapper>
        <MenuWrapper>
          <NavList>
            <li>
              <Link to="/wladze">WŁADZE</Link>
            </li>
            <li>
              <Link to="/akty-prawne">AKTY PRAWNE</Link>
            </li>
            <li>
              <Link to="/przetargi">PRZETARGI</Link>
            </li>
            <li>
              <Link to="/ogloszenia">OGŁOSZENIA</Link>
            </li>
            <li>
              <Link to="/aktualnosci">AKTUALNOŚCI</Link>
            </li>
            <li>
              <Link to="/inwestycje">INWESTYCJE</Link>
            </li>
          </NavList>
        </MenuWrapper>
      </Container>
    </Overlay>
  </Top>
)

export default TopSub
