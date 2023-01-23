import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import SectionTitle from "../../atomic/atoms/section-title";
import DownloadArea from "../../atomic/organisms/download-area";
import Heading from "../../atomic/atoms/heading";
import Text from "../../atomic/atoms/text";

const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Sędziowe" p="200px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      <Heading size="3" mb="24px">Komisja sędziowska zachodniopomorskiego związku piłki ręcznej</Heading>
      <Text mb="16px">Przewodniczący: Jakub Jerlecki</Text>
      <Text mb="16px">Zastępca Przewodniczącego: Marek Królik</Text>
      <Text mb="16px">Członek Komisji ds. rozgrywek szkolnych: Mateusz Krzemień</Text>
      <Text mb="48px">Członek Komisji: Sebastian Kudźba</Text>
      <DownloadArea data={data.allWpPage.nodes[0].sedziowie.sedziowieLista} mb="48px" />
    </Container>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query WordpressReferees {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDo2MTA="}}) {
      nodes {
        title
        sedziowie {
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