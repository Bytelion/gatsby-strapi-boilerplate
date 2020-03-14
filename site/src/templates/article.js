import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components'
import NewsDetails from '../components/news/news-details'

const ArticleTemplate = ({ data }) => {
	return (<Layout>
		<article class="news_entry" itemscope="itemscope" itemtype="http://schema.org/NewsArticle">
			<div class="page_feature">
				<NewsDetails item={data}></NewsDetails>
			</div>
		</article>
	</Layout>
	)
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      caption
      image {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
    	}
      author {
        id
        username
      }
    }
  }
`