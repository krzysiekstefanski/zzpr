import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import Container from "../../../atomic/partials/container";
import Grid from "../../../components/grid"
import SectionTitle from "../../../atomic/atoms/section-title";
import { FlexBox } from "../../../components/flexbox";
import SquadArea from "../../../atomic/organisms/squad-area";
import ClubCard from "../../../atomic/molecules/club-card";

const KadraDziewczetaPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Kadry - dziewczęta" p="145px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      <SquadArea data={data.allWpPage.nodes[0].kadryChlopcy.kadra} mb="48px" />
    </Container>
  </Layout>
)

export default KadraDziewczetaPage

export const pageQuery = graphql`
  query WordpressSquadGirls {
    wpPage(id: {eq: "cG9zdDoy"}) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    allWpPage(filter: {id: {eq: "cG9zdDo2Mjk="}}) {
      nodes {
        title
        kadryChlopcy {
          kadra {
            kadratytul
            kadradokument {
              id
              localFile {
                publicURL
              }
            }
            kadrapliki {
              kadraplikinazwa
              kadraplikilink {
                id
                localFile {
                  publicURL
                }
              }
            }
          }
        }
      }
    }
  }
`