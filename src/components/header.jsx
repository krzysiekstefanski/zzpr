import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "./colors"
import Container from "../atomic/partials/container"
import { menu } from "./general-config"
import LogoSVG from "../images/logo-zzpr.inline.svg"

const CustomHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 32px 0;
  background-color: ${menu.backgroundColor ? menu.backgroundColor[0] : ""};
  border-bottom: ${menu.borderBottom ? menu.borderBottom[0] : ""};
  transition: padding 0.3s ease;

  @media (min-width: 992px) {
    align-items: center;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.alt {
    background-color: ${menu.backgroundColor ? menu.backgroundColor[1] : ""};
    padding: 16px 0;

    .hamburger span {
      background-color: ${menu.hamburgerColor ? menu.hamburgerColor[0] : ""};
    }

    nav {
      transform: translateY(-32px);

      @media (min-width: 992px) {
        border-bottom-width: 0;
        transform: translateY(0);
      }
    }

    .logo {
      color: #fff;
    }

    ul {
      display: flex;
    }
  }
`

const LogoWrapper = styled(Link)`
  width: 100%;
  //position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Albert Sans, sans-serif;
  color: ${menu.navigationColor ? menu.navigationColor[1] : ""};
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

const Navigation = styled.nav`
  height: 288px;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 110px;
  transition: height 0.3s ease, transform 0.3s ease;
  overflow: hidden;

  @media (min-width: 992px) {
    position: static;
    background-color: transparent;
    background-image: none;
    height: auto;
    overflow: visible;
  }

  &.hidden {
    height: 0px;

    @media (min-width: 992px) {
      height: auto;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1192px;
  list-style: none;
  padding: 32px 15px;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid ${color.neutral20};
    padding: 8px 0 0;
    margin: 16px auto 0;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;

    @media (min-width: 992px) {
      width: auto;
      margin-bottom: 0;
    }

    a {
      ${menu.typography ? menu.typography : null}
      color: ${menu.color[0]};
      text-transform: ${menu.textTransform ? menu.textTransform : ""};
      text-decoration: none;
      white-space: nowrap;
      padding: 8px;
      transition: color 0.3s ease, background-color 0.3s ease;
      position: relative;

      &:hover {
        color: ${menu.colorHover[0]};
      }
    }
  }

  hr {
    height: 24px;
    border: 0;
    border-right: 1px solid ${color.neutral20};
  }
`

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 45px;
  padding: 5px;
  position: relative;
  background: transparent;
  border: 0;
  cursor: pointer;
  z-index: 1;

  @media (min-width: 992px) {
    display: none;
  }

  &:focus {
    outline-color: #fff;
  }

  span {
    display: block;
    height: 6px;
    width: 35px;
    background-color: ${menu.hamburgerColor ? menu.hamburgerColor[0] : ""};
    border-radius: 2px;
    position: relative;
    transition: background-color 0.3s ease;
  }

  &.active {
    justify-content: center;
    padding: 2px;

    span {
      position: absolute;
      transition: transform 0.3s ease;

      &:nth-child(1) {
        top: calc(50% - 3px);
        transform: rotate(45deg);
        transform-origin: center;
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        bottom: calc(50% - 3px);
        transform: rotate(-45deg);
        transform-origin: center;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false)

  useEffect(() => {
    const hero = document.querySelector(".top-overlay")
    const header = document.querySelector(".header")

    if (hero) {
      const heroSize = hero.offsetHeight / 10

      if (document.documentElement.scrollTop > heroSize) {
        header.classList.add("alt")
      } else {
        header.classList.remove("alt")
      }

      window.onscroll = () => {
        if (document.documentElement.scrollTop > heroSize) {
          header.classList.add("alt")
        } else {
          header.classList.remove("alt")
        }
      }
    } else {
      header.classList.add("alt")
    }
  })

  const handleClick = e => {
    e.target.closest("button").classList.toggle("active")
    setHamburgerIsActive(!hamburgerIsActive)
  }

  const handleMenuItemClick = e => {
    e.target.closest("ul").parentElement.classList.remove("active")
    e.target.closest("ul").parentElement.previousSibling.classList.remove("active")
    setHamburgerIsActive(!hamburgerIsActive)
  }

  return (
    <CustomHeader className="header">
      <Container position="static">
        <LogoWrapper className="logo" to="/">
          <LogoSVG />
        </LogoWrapper>
      </Container>
      <Container position="static">
        <Hamburger
          className="hamburger"
          onClick={e => handleClick(e)}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Navigation className={hamburgerIsActive ? "active" : "hidden"}>
          <NavList>
            <li>
              <Link to="/news" onClick={e => handleMenuItemClick(e)}>News</Link>
            </li>
            <hr />
            <li>
              <Link to="/wydarzenia" onClick={e => handleMenuItemClick(e)}>Wydarzenia</Link>
            </li>
            <hr />
            <li>
              <Link to="/kluby" onClick={e => handleMenuItemClick(e)}>Kluby</Link>
            </li>
            <hr />
            <li>
              <Link to="/kadry" onClick={e => handleMenuItemClick(e)}>Kadry</Link>
            </li>
            <hr />
            <li>
              <Link to="/trenerzy" onClick={e => handleMenuItemClick(e)}>Trenerzy</Link>
            </li>
            <hr />
            <li>
              <Link to="/sedziowie" onClick={e => handleMenuItemClick(e)}>Sędziowie</Link>
            </li>
            <hr />
            <li>
              <Link to="/oldboys" onClick={e => handleMenuItemClick(e)}>Oldboys</Link>
            </li>
            <hr />
            <li>
              <Link to="/plazowa" onClick={e => handleMenuItemClick(e)}>Ręczna plażowa</Link>
            </li>
            <hr />
            <li>
              <Link to="/galerie" onClick={e => handleMenuItemClick(e)}>Galerie</Link>
            </li>
          </NavList>
        </Navigation>
      </Container>
    </CustomHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
