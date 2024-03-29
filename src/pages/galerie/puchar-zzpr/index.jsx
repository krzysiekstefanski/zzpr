import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import Container from "../../../atomic/partials/container";
import Text from "../../../atomic/atoms/text";
import SectionTitle from "../../../atomic/atoms/section-title";
import GalleryPreview from "../../../atomic/organisms/gallery-preview";


const PucharPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Galerie - Puchar ZZPR" p="145px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      {data.allWpPage.nodes[0].galeria.listaGalerii ?
        data.allWpPage.nodes[0].galeria.listaGalerii.map((galeria) => (
          <GalleryPreview data={galeria} />
        ))
        : <Text>Strona w trakcie budowy</Text>}
    </Container>
  </Layout>
)

export default PucharPage

export const pageQuery = graphql`
  query WordpressPuchar {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDoxMjE5"}}) {
      nodes {
        galeria {
          listaGalerii {
            nazwaGalerii
            zdjecia {
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`