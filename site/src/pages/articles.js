import React from "react"
import Layout from "../components"
import NewsList from "../components/news/news-list"

const Articles = ({ data }) => (
	<Layout>
		<NewsList data={data}></NewsList>
	</Layout>
)

export default Articles