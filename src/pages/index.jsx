import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Top from "../atomic/sections/homepage/top";
import Articles from "../atomic/sections/homepage/articles";
import Sponsors from "../atomic/sections/homepage/sponsors";
import Schedule from "../atomic/sections/homepage/schedule";
import About from "../atomic/sections/homepage/about";
import Info from "../atomic/sections/homepage/info";
import Games from "../atomic/sections/homepage/games";
import Team from "../atomic/sections/homepage/team";
import Contact from "../atomic/sections/homepage/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title={data.allWpPage.nodes[0].ustawienia.ustawieniaTytulStrony} />
    <Top data={data.allWpPage.nodes[0].zdjecieGlowne} />
    <Articles data={data.allWpPost.edges} />
    <Sponsors data={data.allWpPage.nodes[0].sponsorzy} />
    <Schedule data={data.allWpPage.nodes[0].terminarz} />
    {/* <About data={data.wpPage.oNas} /> */}
    {/* <Info data={data.wpPage.informacje} /> */}
    <Games data={data.allWpPage.nodes[0].uslugi} />
    {/* <Team data={data.wpPage.kadra} />
    <Contact data={data.wpPage.kontakt} /> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query WordpressPages {
    allWpPage(filter: {id: {eq: "cG9zdDoy"}}) {
      nodes {
        title
        ustawienia {
          ustawieniaTytulStrony
          ustawieniaOpisStrony
          ustawieniaKolorPrzewodni
          ustawieniaKolorDodatkowy
        }
        zdjecieGlowne {
          zdjecieGlowneObraz {
            sourceUrl
            localFile {
              childImageSharp {
                fluid(maxWidth: 1896) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        sponsorzy {
          sponsorzyZdjecia {
            sponsorzyZdjeciaZdjecie {
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1216) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            sponsorzyZdjeciaLink
          }
        }
        terminarz {
          najblizszeMecze {
            najblizszeMeczeData
            najblizszeMeczeLista {
              najblizszeMeczeListaMecz
            }
          }
          ostatnieMecze {
            ostatnieMeczeData
            ostatnieMeczeLista {
              ostatnieMeczeListaMecz
              ostatnieMeczeListaWynik
            }
          }
        }
        uslugi {
          uslugiUsluga {
            uslugiIkona {
              mediaDetails {
                file
              }
              mediaItemUrl
              sourceUrl
            }
            uslugiOpis
            uslugiLink
          }
        }
      }
    }
    allWpPost(sort: { fields: [date], order:DEC }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`
