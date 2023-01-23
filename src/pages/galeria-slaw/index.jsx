import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import parse from "html-react-parser"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import Text from "../../atomic/atoms/text";
import SectionTitle from "../../atomic/atoms/section-title";

const Content = styled.div`
  margin-bottom: 48px;

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    margin-bottom: 32px;
  }

  p {
    color: #fff;
    margin-bottom: 24px;
  }
`

const ZzprPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Galeria Sław" p="200px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      {data.allWpPage.nodes[0].content ? <Content>{parse(data.allWpPage.nodes[0].content)}</Content> : <Text>Strona w trakcie budowy</Text>}
    </Container>
  </Layout>
)

export default ZzprPage

export const pageQuery = graphql`
  query WordpressZzpr {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDo4MTY="}}) {
      nodes {
        title
        content
      }
    }
  }
`