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
import Heading from "../../atomic/atoms/heading";
import Link from "../../atomic/atoms/link";

const KontaktPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="Kontakt" p="200px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      <Heading m="0 0 4px">Zachodniopomorski związek piłki ręcznej</Heading>
      <Text>Adres do korespondencji:</Text>
      <Text>ul. Bośniacka 7</Text>
      <Text>70-842 Szczecin</Text>
      <FlexBox>
        <Text mr="8px">Email kontaktowy: </Text><Link href="mailto: biuro@zzpr.pl">biuro@zzpr.pl</Link>
      </FlexBox>
      <Text>Nr konta bankowego : 76 1750 0012 0000 0000 4099 0062</Text>
      <Heading m="32px 0 4px">Komisja Gier i Dyscypliny</Heading>
      <FlexBox>
        <Text mr="8px">Email kontaktowy: </Text><Link href="mailto:kgid@zzpr.pl">kgid@zzpr.pl</Link>
      </FlexBox>
      <Heading m="32px 0 4px">Komisja Sędziowska</Heading>
      <FlexBox>
        <Text mr="8px">Email kontaktowy: </Text><Link href="mailto:ks@zzpr.pl">ks@zzpr.pl</Link>
      </FlexBox>
      <Heading m="32px 0 4px">Media ZZPR</Heading>
      <FlexBox column mb="48px">
        <Link href="http://zzpr.pl/">www.zzpr.pl</Link>
        <Link href="https://www.facebook.com/zachodniopomorskihandball">www.facebook.com/zachodniopomorskihandball</Link>
      </FlexBox>
    </Container>
  </Layout>
)

export default KontaktPage

export const pageQuery = graphql`
  query WordpressKontakt {
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