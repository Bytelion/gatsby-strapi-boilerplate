import React from 'react'

const NewsDetails = (data) => {
	const {created_at, author} = data.item.node;

	return (
		<div className="news_item_details">
			<div className="news_item_detail news_item_date">
				<span className="news_item_detail_hint">Published: </span>
				<time className="news_item_detail_label" datetime={created_at} itemprop="datePublished">{created_at}</time>
			</div>
			<div className="news_item_detail news_item_author">
				<span className="news_item_detail_hint">by </span>
				<span className="news_item_detail_label" itemprop="author">{author.username}</span>
			</div>
		</div>
	);
}

export default NewsDetails