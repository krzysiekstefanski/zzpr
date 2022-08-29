/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import Header from "./header"
import Footer from "./footer"
import { color } from "./colors"
//import "./layout.css"

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${color.black};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Albert Sans, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  html,
  body {
    min-height: 100%;
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  [data-reach-dialog-overlay] {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  @media only screen and (min-width: 769px) {
    [data-reach-dialog-overlay] {
      align-items: flex-start;
    }
  }
  
  [data-reach-dialog-content] {
    width: 100vw !important;
    background-color: transparent !important;
    position: relative;
    padding: 0 !important;
  }
  
  @media only screen and (min-width: 769px) {
    [data-reach-dialog-content] {
      width: 70vw !important;
      padding: 2rem !important;
    }
  }
  
  [data-reach-dialog-content] img {
    margin: 0;
  }

  main {
    overflow: hidden;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta name="format-detection" content="telephone=no"/>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
