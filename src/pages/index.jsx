import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Top from "../atomic/sections/homepage/top";
import Articles from "../atomic/sections/homepage/articles";
import Schedule from "../atomic/sections/homepage/schedule";
import About from "../atomic/sections/homepage/about";
import Info from "../atomic/sections/homepage/info";
import Games from "../atomic/sections/homepage/games";
import Team from "../atomic/sections/homepage/team";
import Contact from "../atomic/sections/homepage/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Top data={data.wpPage.zdjecieGlowne} />
    <Articles data={data.wpPage.sponsorzy} />
    <Schedule data={data.wpPage.terminarz} />
    {/* <About data={data.wpPage.oNas} /> */}
    {/* <Info data={data.wpPage.informacje} /> */}
    <Games data={data.wpPage.uslugi} />
    {/* <Team data={data.wpPage.kadra} />
    <Contact data={data.wpPage.kontakt} /> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query WordpressMain {
    wpPage(id: { eq: "cG9zdDoy" }) {
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
`
