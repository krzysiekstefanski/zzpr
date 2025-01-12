import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container"
import Grid from "../../components/grid"
import Text from "../../atomic/atoms/text"
import SectionTitle from "../../atomic/atoms/section-title"
import { FlexBox } from "../../components/flexbox"
import DownloadArea from "../../atomic/organisms/download-area"

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

  p {
    color: #fff;
    margin-bottom: 24px;
  }
`

const ZarzadPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle
        className="top-overlay"
        title="Zarząd"
        p="145px 0 8px 0"
        pMD="320px 0 8px 0"
        mb="48px"
      />
      {data.allWpPage.nodes[0].content ? (
        <Content>{parse(data.allWpPage.nodes[0].content)}</Content>
      ) : (
        <Text>Strona w trakcie budowy</Text>
      )}
    </Container>
  </Layout>
)

export default ZarzadPage

export const pageQuery = graphql`
  query WordpressZarzad {
    wpPage(id: { eq: "cG9zdDoy" }) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: { id: { eq: "cG9zdDo4MTM=" } }) {
      nodes {
        title
        content
      }
    }
  }
`
