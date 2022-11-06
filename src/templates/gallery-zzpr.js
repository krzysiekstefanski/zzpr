import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";
import Grid from "../components/grid";
import parse from "html-react-parser"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../atomic/partials/container";
import SectionTitle from "../atomic/atoms/section-title";
import Text from "../atomic/atoms/text";


const Wrapper = styled(Grid)`
    .gatsby-image-wrapper {
        &::before {
            content: '';
            display: block;
            padding-top: 70%;
        }
    }
`

export default ({ data, pageContext }) => {
    const page = data.allWpPage.nodes[0]
    const gallery = page.galeria.listaGalerii[pageContext.id].nazwaGalerii
    const photos = page.galeria.listaGalerii[pageContext.id].zdjecia
    return (
        <Layout>
            {/* <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} /> */}
            <Container>
              <p>aaaa</p>
              <SectionTitle className="top-overlay" title={gallery} p="320px 0 8px 0" mb="48px" />
              {/* <Content>{parse(post.content)}</Content> */}
              <Wrapper columns="1fr 1fr 1fr" gap="24px" width="100%" mb="64px">
                {photos.map((zdjecie) => (
                    <Link to={zdjecie.localFile.publicURL}>
                        <Img fixed={zdjecie.localFile.childImageSharp.fluid} />
                    </Link>
                ))}
              </Wrapper>
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query {
    allWpPage(filter: {id: {eq: "cG9zdDoxMjE5"}}) {
      nodes {
        galeria {
          listaGalerii {
            nazwaGalerii
            zdjecia {
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 `