import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import styled from "styled-components"
import Container from "../../atomic/partials/container"
import SectionTitle from "../../atomic/atoms/section-title"
import DownloadArea from "../../atomic/organisms/download-area"
import Heading from "../../atomic/atoms/heading"
import Text from "../../atomic/atoms/text"
import parse from "html-react-parser"

const Content = styled.div`
  margin-bottom: 48px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    margin-bottom: 32px;
  }

  p,
  ul,
  a {
    color: #fff;
    margin-bottom: 24px;
  }
`
const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle
        className="top-overlay"
        title="Sędziowe"
        p="145px 0 8px 0"
        pMD="320px 0 8px 0"
        mb="48px"
      />
      {data.allWpPage.nodes[0].content ? (
        <Content>{parse(data.allWpPage.nodes[0].content)}</Content>
      ) : (
        <Text>Strona w trakcie budowy</Text>
      )}
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
        content
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
