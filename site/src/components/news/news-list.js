import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import NewsItem from "./news-item"
import styles from "./news-list.module.scss"

const NewsList = () => (
	<StaticQuery
		query={graphql`
			query ArticleQuery {
				allStrapiArticle {
					edges {
						node {
							title
							caption
							created_at
							image {
								childImageSharp {
									fluid(maxWidth: 500, quality: 100) {
										...GatsbyImageSharpFluid
										presentationWidth
									}
								}
							}
							author {
								username
							}
						}
					}
				}
			}
		`}
		render={data => (
			<div className={styles.news_list}>
				<div className="fs_row">
					<div className="fs_cell">
						<div className={styles.news_list_inner}>
							<ul className={styles.news_list_items}>
								{data.allStrapiArticle.edges.map(item =>
									<NewsItem item={item}></NewsItem>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)}
	/>
)

export default NewsList

