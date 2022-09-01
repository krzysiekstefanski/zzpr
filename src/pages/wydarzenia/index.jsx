import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import Grid from "../../components/grid"
import SectionTitle from "../../atomic/atoms/section-title";
import { FlexBox } from "../../components/flexbox";
import DownloadArea from "../../atomic/organisms/download-area";

const ArticleWrapper = styled.div`
    height: 276px;
    width: 100%;
`;

const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle title="Wydarzenia" p="250px 0 0 0" mb="48px" />
      <DownloadArea data={data.allWpPage.nodes[0].plikiDoPobrania} />
    </Container>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query WordpressEvents {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDo1NzI="}}) {
      nodes {
        title
        plikiDoPobrania {
          pliki {
            linkDoPliku {
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