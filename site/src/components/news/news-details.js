import React from 'react'
import styles from './news-details.module.scss'
import dateFormat from 'dateformat'

const NewsDetails = (data) => {
	const { created_at, author } = data.item.node;
	const publishDate = new Date(created_at);

	return (
		<div className={styles.news_item_details}>
			<div className={styles.news_item_detail}>
				<span className={styles.news_item_detail_hint}>Published: </span>
				<time className={styles.news_item_detail_label} dateTime={created_at} itemProp="datePublished">{dateFormat(publishDate, "fullDate")}</time>
			</div>
			<div className={styles.news_item_detail}>
				<span className={styles.news_item_detail_hint}>by </span>
				<span className={styles.news_item_detail_label} itemProp="author">{author.username}</span>
			</div>
		</div>
	);
}

export default NewsDetails