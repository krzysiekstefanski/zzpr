import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container"
import SectionTitle from "../../atomic/atoms/section-title"
import DownloadArea from "../../atomic/organisms/download-area"
import Heading from "../../atomic/atoms/heading"
import Text from "../../atomic/atoms/text"
import parse from "html-react-parser"

const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      {console.log(data.allWpPage.nodes[0].sedziowie)}
      <SectionTitle
        className="top-overlay"
        title="Sędziowe"
        p="145px 0 8px 0"
        pMD="320px 0 8px 0"
        mb="48px"
      />
      <Heading size="3" mb="24px">
        Komisja sędziowska zachodniopomorskiego związku piłki ręcznej
      </Heading>
      {data.allWpPage.nodes[0].sedziowie.komisja.map((osoba, i) => (
        <Text mb="16px">
          {parse(osoba.komisjastanowisko + ": " + osoba.komisjaimie)}
        </Text>
      ))}
      <DownloadArea
        data={data.allWpPage.nodes[0].sedziowie.sedziowieLista}
        mb="48px"
      />
    </Container>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query WordpressReferees {
    wpPage(id: { eq: "cG9zdDoy" }) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: { id: { eq: "cG9zdDo2MTA=" } }) {
      nodes {
        title
        sedziowie {
          komisja {
            komisjaimie
            komisjastanowisko
          }
          sedziowieLista {
            plik {
              localFile {
                ext
                publicURL
                url
                name
                size
              }
            }
          }
        }
      }
    }
  }
`
