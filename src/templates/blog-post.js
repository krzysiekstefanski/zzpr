import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Container from "../atomic/partials/container";
import SectionTitle from "../atomic/atoms/section-title";
import Text from "../atomic/atoms/text";

const Content = styled.div`
  margin-bottom: 32px;

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    margin-bottom: 32px;
  }

  p {
    color: #fff;
    margin-bottom: 24px;
  }
`

export default ({ data }) => {
    console.log(data)
    const post = data.allWpPost.edges[0].node
    console.log(post)
    return (
        <Layout>
            {/* <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} /> */}
            <Container>
              <SectionTitle className="top-overlay" title={post.title} p="320px 0 0 0" mb="48px" />
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