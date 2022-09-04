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

const MlodziczkiPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Młodziczki" p="320px 0 0 0" mb="48px" />
      <Text>Strona w trakcie budowy</Text>
    </Container>
  </Layout>
)

export default MlodziczkiPage

export const pageQuery = graphql`
  query WordpressMlodziczki {
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
          plikiLista {
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