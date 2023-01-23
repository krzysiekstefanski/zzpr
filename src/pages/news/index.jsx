import * as React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Container from "../../atomic/partials/container";
import Article from "../../atomic/molecules/article";
import Box from "../../atomic/atoms/Box/Box"
import SectionTitle from "../../atomic/atoms/section-title";

const ArticleWrapper = styled.div`
    min-height: 276px;
    width: 100%;
`;

const NewsPage = ({ data }) => (
  <Layout>
    <Seo title={data.wpPage.ustawienia.ustawieniaTytulStrony} />
    <Container>
      <SectionTitle className="top-overlay" title="News" p="145px 0 8px 0" pMD="320px 0 8px 0" mb="48px" />
      <Box column displayMD="grid" columnsMD="33% 33% 33%" gap="30px" margin="0 0 100px">
        {data.allWpPost.edges.map((post) => (
          <ArticleWrapper>
            <Article date={post.node.date} title={post.node.title} text={post.node.excerpt} url={post.node.slug} />
          </ArticleWrapper>
        ))}
      </Box>
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
    allWpPost(sort: { fields: [date], order:DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "DD-MM-YYYY")
        }
      }
    }
  }
`