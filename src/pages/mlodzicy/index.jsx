import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import Grid from "../../components/grid"
import Text from "../../atomic/atoms/text";
import SectionTitle from "../../atomic/atoms/section-title";
import { FlexBox } from "../../components/flexbox";
import DownloadArea from "../../atomic/organisms/download-area";

const MlodzicyPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Młodzicy" p="320px 0 8px 0" mb="48px" />
      {data.allWpPage.nodes[0].content ? <Content>{parse(data.allWpPage.nodes[0].content)}</Content> : <Text>Strona w trakcie budowy</Text>}
    </Container>
  </Layout>
)

export default MlodzicyPage

export const pageQuery = graphql`
  query WordpressMlodzicy {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDoxMTc3"}}) {
      nodes {
        title
        content
      }
    }
  }
`