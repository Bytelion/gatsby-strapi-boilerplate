import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import NewsDetails from './news-details'
import styles from './news-item.module.scss'

const NewsItem = (data) => {
	const { title, caption, image } = data.item.node;
	const path = title.split(' ').join('_').toLowerCase();

	return (
		<article className={styles.news_item} aria-label={title} itemScope="itemscope" itemType="http://schema.org/NewsArticle">
			<figure className={styles.news_item_figure}>
				<Link className={styles.news_item_figure_link} to={`/articles/${path}`} aria-label={'Read more about' + title} tabIndex="-1">
					<Img className={styles.news_item_image} fluid={image.childImageSharp.fluid} />
				</Link>
			</figure>
			<div className={styles.news_item_wrapper}>
				<div className={styles.news_item_header}>
					<h2 className={styles.news_item_title} itemProp="headline">
						<Link className={styles.news_item_title_link} to={`/articles/${path}`}>{title}</Link>
					</h2>
				</div>
				<div className={styles.news_item_body}>
					<NewsDetails item={data.item}></NewsDetails>
					<div className={styles.news_item_caption} itemProp="description">
						<p>{caption}</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default NewsItem