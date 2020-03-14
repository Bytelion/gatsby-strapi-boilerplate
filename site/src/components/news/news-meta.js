import React from 'React'

const NewsMeta = (data) => {

	return (
		<div class="news_meta">
			<div class="fs-row">
				<div class="fs-cell">
					<div class="news_meta_inner">
						<div class="news_meta_body">
							<NewsDetails item={item}></NewsDetails>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsMeta