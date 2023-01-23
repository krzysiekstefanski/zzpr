import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components";
import parse from "html-react-parser"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../atomic/partials/container";
import SectionTitle from "../atomic/atoms/section-title";
import Text from "../atomic/atoms/text";

const Content = styled.div`
  margin-bottom: 48px;

  h1, h2, h3, h4, h5, h6, ol {
    color: #fff;
    margin-bottom: 32px;
  }

  p, li {
    color: #fff;
    margin-bottom: 24px;
  }

  ul, ol {
    padding-left: 24px;
  }
`

export default ({ data }) => {
    const post = data.allWpPost.edges[0].node
    return (
        <Layout>
            {/* <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} /> */}
            <Container>
              <SectionTitle className="top-overlay" title={post.title} p="200px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
              <Content>{parse(post.content)}</Content>
            </Container>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
        }
      }
    }
  }
 `