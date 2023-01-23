import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { color } from "./colors"
import Container from "../atomic/partials/container"
import LinkExt from "../atomic/atoms/link"
import Link from "../atomic/atoms/InternalLink"
import SubMenu from "../atomic/cells/SubMenu/SubMenu"
import { menu } from "./general-config"
import LogoSVG from "../images/logo-czarne-zzpr.inline.svg"
import AwardSVG from "../images/award.inline.svg"
import DocumentSVG from "../images/document.inline.svg"
import DashboardSVG from "../images/dashboard.inline.svg"
import ChatSVG from "../images/chat.inline.svg"
import ArrowDownSVG from "../images/arrow-down.inline.svg"


const CustomHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 16px 0 8px;
  background-color: ${menu.backgroundColor ? menu.backgroundColor[0] : ""};
  border-bottom: ${menu.borderBottom ? menu.borderBottom[0] : ""};
  transition: padding 0.3s ease;

  @media (min-width: 992px) {
    align-items: center;
    padding: 32px 0;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.alt {
    background-color: ${menu.backgroundColor ? menu.backgroundColor[1] : ""};
    border-bottom: ${menu.borderBottom ? menu.borderBottom[1] : ""};
    padding: 16px 0;

    .hamburger span {
      background-color: ${menu.hamburgerColor ? menu.hamburgerColor[0] : ""};
    }

    .logo {
      color: ${color.white};
    }
  }
`

const LogoWrapper = styled(Link)`
  display: none;
  width: 100%;
  mix-blend-mode: lighten;
  position: relative;

  &::before {
    content: '';
    border: 8px solid ${color.black};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 576px) {
    max-width: 250px;
  }

  @media (min-width: 769px) {
    display: block;
  }

  @media (min-width: 992px) {
    max-width: 350px;
  }

  svg {
    background-color: ${color.white};
  }
`

const MobileLogoWrapper = styled(Link)`
  display: block;
  width: 50%;
  mix-blend-mode: lighten;
  position: relative;

  &::before {
    content: '';
    border: 8px solid ${color.black};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 576px) {
    max-width: 250px;
  }

  @media (min-width: 769px) {
    display: none;
  }

  svg {
    background-color: ${color.white};
  }
`

const TopNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const TopNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1192px;
  list-style: none;
  padding: 16px 0 0;

  // @media (min-width: 992px) {
  //   flex-direction: row;
  // }

  & > li {
    position: relative;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  li {
    a {
      align-items: center;
      ${menu.typography ? menu.typography : null}
      color: ${menu.color[0]};
      text-transform: ${menu.textTransform ? menu.textTransform : ""};
      text-decoration: none;
      white-space: nowrap;
      transition: color 0.3s ease, background-color 0.3s ease;
      position: relative;
      cursor: pointer;

      svg {
        &:first-child {
          display: none;
          margin-right: 8px;
        }

        &.arrow-down {
          transform: translateY(-1px);
          margin-left: 8px;
        }

        path {
          transition: fill 0.3s ease;
        }
      }

      &:hover {
        color: ${menu.colorHover[0]};

        svg path {
          fill:  ${menu.colorHover[0]};
        }
      }
    }
  }

  @media (min-width: 769px) {
    padding: 0;
    margin: 0 24px;
    
    & > li {
      &:not(:last-child) {
        margin-right: 40px;
      }
    }

    li {
      a {
        svg {
          display: block;
        }
      }
    }
  }
`

const Navigation = styled.nav`
  height: calc(100vh - 75px);
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 75px;
  transition: height 0.3s ease, transform 0.3s ease;
  overflow: auto;

  @media (min-width: 992px) {
    height: 288px;
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
  background-color: ${color.black};
  list-style: none;
  padding: 16px 0;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid ${color.neutral20};
    padding: 8px 24px 0;
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
      cursor: pointer;

      svg {
        transform: translateY(-1px);
        margin-left: 8px;

        path {
          transition: fill 0.3s ease;
        }
      }

      &:hover {
        color: ${menu.colorHover[0]};

        svg path {
          fill:  ${menu.colorHover[0]};
        }
      }
    }
  }

  & > li {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  hr {
    display: none;
    height: 24px;
    border: 0;
    border-right: 1px solid ${color.neutral20};

    @media (min-width: 769px) {
      display: block;
    }
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
    }
  })

  const handleClick = e => {
    setHamburgerIsActive(!hamburgerIsActive)
    document.querySelectorAll('.header ul').forEach(function (list) {
      list.classList.remove("active")
    })
  }

  const handleMenuItemClick = (e, hamburgerHandle) => {
    e.target.closest("ul").parentElement.classList.remove("active")
    setHamburgerIsActive(hamburgerHandle)

    if (e.target.closest("a").nextSibling) {
      document.querySelectorAll('.header ul').forEach(function (list) {
        if (list !== e.target.closest("a").nextSibling) {
          list.classList.remove("active")
        }
      })
      e.target.closest("a").nextSibling.classList.toggle("active")
    }
  }

  return (
    <CustomHeader className="header">
      <Container position="static" order="2" orderMD="1">
        <LogoWrapper className="logo" to="/">
          <LogoSVG />
        </LogoWrapper>
        <TopNav aria-label="secondary">
          <TopNavList>
            <li>
              <LinkExt onClick={e => handleMenuItemClick(e, false)} mr="6px" mrMd="0"><AwardSVG />ZZPR<ArrowDownSVG className="arrow-down" /></LinkExt>
              <SubMenu width="100vw" backgroundColor={color.black} backgroundColorMD={color.neutral00} top="31px" left="-15px">
                <li>
                  <Link to="/zarzad" onClick={e => handleMenuItemClick(e, false)}>Zarząd</Link>
                </li>
                <li>
                  <Link to="/galeria-slaw" onClick={e => handleMenuItemClick(e, false)}>Galeria Sław</Link>
                </li>
                <li>
                  <Link to="/historia" onClick={e => handleMenuItemClick(e, false)}>Historia</Link>
                </li>
              </SubMenu>
            </li>
            <li>
              <Link to="/rozgrywki" onClick={e => handleMenuItemClick(e)} mr="6px"><DashboardSVG />Rozgrywki</Link>
            </li>
            <li>
              <Link to="/regulaminy-i-przepisy" onClick={e => handleMenuItemClick(e, false)} display="none" displayMD="flex"><DocumentSVG />Regulaminy i przepisy</Link>
              <Link to="/regulaminy-i-przepisy" onClick={e => handleMenuItemClick(e, false)} displayMD="none" mr="6px"><DocumentSVG />Przepisy</Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={e => handleMenuItemClick(e, false)}><ChatSVG />Kontakt</Link>
            </li>
          </TopNavList>
        </TopNav>
      </Container>
      <Container position="static" order="1" orderMD="2">
        <MobileLogoWrapper className="logo" to="/">
          <LogoSVG />
        </MobileLogoWrapper>
        <Hamburger
          className={hamburgerIsActive ? "active" : "hidden"}
          onClick={e => handleClick(e)}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Navigation className={hamburgerIsActive ? "active" : "hidden"} aria-label="primary">
          <NavList>
            <li>
              <Link to="/news" onClick={e => handleMenuItemClick(e, false)} ml="8px" mlMD="0">News</Link>
            </li>
            <hr />
            <li>
              <Link to="/wydarzenia" onClick={e => handleMenuItemClick(e, false)} ml="8px" mlMD="0">Wydarzenia</Link>
            </li>
            <hr />
            <li>
              <Link to="/kluby" onClick={e => handleMenuItemClick(e, false)} ml="8px" mlMD="0">Kluby</Link>
            </li>
            <hr />
            <li>
              <LinkExt onClick={e => handleMenuItemClick(e, true)} ml="8px" mlMD="0">Kadry<ArrowDownSVG className="arrow-down" /></LinkExt>
              <SubMenu position="static">
                <li>
                  <Link to="/kadry/chlopcy" onClick={e => handleMenuItemClick(e, false)}>Kadry - Chłopcy</Link>
                </li>
                <li>
                  <Link to="/kadry/dziewczeta" onClick={e => handleMenuItemClick(e, false)}>Kadry - Dziewczęta</Link>
                </li>
              </SubMenu>
            </li>
            <hr />
            <li>
              <LinkExt onClick={e => handleMenuItemClick(e, true)} ml="8px" mlMD="0">Trenerzy<ArrowDownSVG className="arrow-down" /></LinkExt>
              <SubMenu position="static">
                <li>
                  <Link to="/trenerzy" onClick={e => handleMenuItemClick(e, false)}>Trenerzy</Link>
                </li>
                <li>
                  <Link to="/ospr" onClick={e => handleMenuItemClick(e, false)}>OSPR</Link>
                </li>
              </SubMenu>
            </li>
            <hr />
            <li>
              <Link to="/sedziowie" onClick={e => handleMenuItemClick(e, false)} ml="8px" mlMD="0">Sędziowie</Link>
            </li>
            <hr />
            <li>
              <Link to="/oldboys" onClick={e => handleMenuItemClick(e, false)} ml="8px" mlMD="0">Oldboys</Link>
            </li>
            <hr />
            <li>
              <Link to="/pilka-reczna-plazowa" onClick={e => handleMenuItemClick(e, false)} ml="8px" mlMD="0">Ręczna plażowa</Link>
            </li>
            <hr />
            <li>
              <LinkExt onClick={e => handleMenuItemClick(e, true)} ml="8px" mlMD="0">Galerie<ArrowDownSVG className="arrow-down" /></LinkExt>
              <SubMenu className="contact" position="static">
                <li>
                  <Link to="/galerie/kadry" onClick={e => handleMenuItemClick(e, false)}>Kadry</Link>
                </li>
                <li>
                  <Link to="/galerie/konferencje" onClick={e => handleMenuItemClick(e, false)}>Konferencje</Link>
                </li>
                <li>
                  <Link to="/galerie/puchar-zzpr" onClick={e => handleMenuItemClick(e, false)}>Puchar ZZPR</Link>
                </li>
              </SubMenu>
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
