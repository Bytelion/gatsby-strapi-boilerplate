import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../layout"

const Articles = ({ data }) => (
  <Layout>
    {data.allStrapiArticle.edges.map(doc =>
      <div>
        <Link to={`/${doc.node.title.split(' ').join('_')}`}>{ doc.node.title }</Link>
      </div>
    )}
  </Layout>
)

export default Articles

export const pageQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          title
          caption
          author {
            username
          }
        }
      }
    }
  }`