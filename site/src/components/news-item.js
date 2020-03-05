import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import NewsDetails from '../components/news-details'
import mystyles from './news-item.module.scss'

const NewsItem = (data) => {
	const {title, caption, image} = data.item.node;
	const path = title.split(' ').join('_').toLowerCase();

	return (
		<article className={mystyles.news_item} aria-label={ title } itemscope="itemscope" itemtype="http://schema.org/NewsArticle">
			<figure className="news_item_figure">
				<Link className="news_item_figure_link" to={`/articles/${path}`} aria-label={'Read more about' + title} tabindex="-1">
					<Img className="news_item_image" fixed={image.childImageSharp.fixed}/>
				</Link>
			</figure>
			<div className="news_item_wrapper">
				<div className="news_item_header">
					<h2 className="news_item_title" itemprop="headline">
						<Link className="news_item_title_link" to={`/articles/${path}`}>{title}</Link>
					</h2>
				</div>
				<div className="news_item_body">
					<NewsDetails item={data.item}></NewsDetails>
					<div className="news_item_caption" itemprop="description">
						<p>{caption}</p>
					</div>
				</div>
			</div>
		</article>
	);
};

export default NewsItem