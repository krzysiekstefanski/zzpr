import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import Box from "../../atomic/atoms/Box/Box"
import SectionTitle from "../../atomic/atoms/section-title";
import DownloadArea from "../../atomic/organisms/download-area";
import ClubCard from "../../atomic/molecules/club-card";

const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Kluby" p="145px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      <Box column displayMD="grid" columnsMD="25% 25% 25% 25%" gap="24px" margin="0 0 120px">
        {data.allWpPage.nodes[0].kluby.klubyLista.map((klub) => (
          <ClubCard data={klub} />
        ))};
      </Box>
      <DownloadArea data={data.allWpPage.nodes[0].kluby.klubyLista} mb="48px" />
    </Container>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query WordpressClubs {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDo1ODQ="}}) {
      nodes {
        title
        kluby {
          klubyLista {
            klubyListaFacebook
            klubyListaNazwa
            klubyListaWebsite
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