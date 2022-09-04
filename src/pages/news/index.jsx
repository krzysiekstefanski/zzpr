import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import Article from "../../atomic/molecules/article";
import Grid from "../../components/grid"
import SectionTitle from "../../atomic/atoms/section-title";

const ArticleWrapper = styled.div`
    min-height: 276px;
    width: 100%;
`;

const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="News" p="320px 0 0 0" mb="48px" />
      <Grid columns="33% 33% 33%" gap="30px" mb="100px">
        <ArticleWrapper>
          <Article date="16.08.2022" title="KURSOKONFERENCJA TRENERSKA - LICENCJA C - 03-04.08.2022 R." text="Zachodniopomorski Związek Piłki Ręcznej w Szczecinie informuje , iż w dniach 03-04.09.2022r. jest organizatorem szkoleniowej kursokonferencji piłki ręcznej dla instruktorów i trenerów na licencję „C” na sezon 2022/2023." link="./news/kursokonferencja-trenerska-licencja-c-03-04082022-r" />
        </ArticleWrapper>
        <ArticleWrapper>
          <Article date="aaa" title="aaa" text="aaa" link="aaa" />
        </ArticleWrapper>
        <ArticleWrapper>
          <Article date="aaa" title="aaa" text="aaa" link="aaa" />
        </ArticleWrapper>
        <ArticleWrapper>
          <Article date="aaa" title="aaa" text="aaa" link="aaa" />
        </ArticleWrapper>
        <ArticleWrapper>
          <Article date="aaa" title="aaa" text="aaa" link="aaa" />
        </ArticleWrapper>
        <ArticleWrapper>
          <Article date="aaa" title="aaa" text="aaa" link="aaa" />
        </ArticleWrapper>
      </Grid>
    </Container>
  </Layout>
)

export default NewsPage

export const pageQuery = graphql`
  query WordpressNews {
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
        zdjecieGlowne {
          zdjecieGlowneObraz {
            sourceUrl
            localFile {
              childImageSharp {
                fluid(maxWidth: 1896) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        sponsorzy {
          sponsorzyZdjecia {
            sponsorzyZdjeciaZdjecie {
              sourceUrl
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1216) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            sponsorzyZdjeciaLink
          }
        }
        terminarz {
          najblizszeMecze {
            najblizszeMeczeData
            najblizszeMeczeLista {
              najblizszeMeczeListaMecz
            }
          }
          ostatnieMecze {
            ostatnieMeczeData
            ostatnieMeczeLista {
              ostatnieMeczeListaMecz
              ostatnieMeczeListaWynik
            }
          }
        }
        uslugi {
          uslugiUsluga {
            uslugiIkona {
              mediaDetails {
                file
              }
              mediaItemUrl
              sourceUrl
            }
            uslugiOpis
            uslugiLink
          }
        }
      }
    }
  }
`