import * as React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container"
import SectionTitle from "../../atomic/atoms/section-title"
import Heading from "../../atomic/atoms/heading"
import parse from "html-react-parser"

const TextField = styled.div`
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:last-child {
    margin-bottom: 48px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #bfbfbf;
  }

  a {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #df3020;
    }
  }
`

const KontaktPage = ({ data }) => (
  <Layout>
    <Seo title={data.ustawienia.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle
        className="top-overlay"
        title="Kontakt"
        p="145px 0 8px 0"
        pMD="320px 0 8px 0"
        mb="48px"
      />
      {data.kontakt.kontakt.kontaktPoleTekstowe.map((poleTekstowe, index) => (
        <TextField key={index}>
          <Heading m="0 0 4px">{poleTekstowe.kontaktTytul}</Heading>
          {parse(poleTekstowe.kontaktTresc)}
        </TextField>
      ))}
    </Container>
  </Layout>
)

export default KontaktPage

export const pageQuery = graphql`
  query WordpressKontakt {
    ustawienia: wpPage(id: { eq: "cG9zdDoy" }) {
      ustawienia {
        ustawieniaTytulStrony
        ustawieniaOpisStrony
        ustawieniaKolorPrzewodni
        ustawieniaKolorDodatkowy
      }
    }
    kontakt: wpPage(id: { eq: "cG9zdDoyNTMx" }) {
      kontakt {
        kontaktPoleTekstowe {
          kontaktTytul
          kontaktTresc
        }
      }
    }
  }
`
