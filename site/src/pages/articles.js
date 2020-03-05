import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components"
import NewsItem from "../components/news-item"

const Articles = ({ data }) => (
  <Layout>
    <div className="news_list">
      <div className="fs-row">
        <div className="fs-cell">
          <div className="news_list_inner">
            <ul className="news_list_items">
              {data.allStrapiArticle.edges.map(item =>
                <NewsItem item={item}></NewsItem>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Articles

export const query = graphql`
  query ArticleQuery {
    allStrapiArticle {
      edges {
        node {
          title
          caption
          created_at
          image {
            childImageSharp {
              fixed(width: 980, height: 654) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          author {
            username
          }
        }
      }
    }
  }`