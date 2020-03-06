import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components"

const Events = ({ data }) => (
	<Layout>
		{data.allStrapiEvent.edges.map(item =>
			<div>
				<Link to={`/events/${item.node.title.split(' ').join('_').toLowerCase()}`}>{item.node.title}</Link>
			</div>
		)}
	</Layout>
)

export default Events

export const query = graphql`
	query EventQuery {
    allStrapiEvent {
			edges {
				node {
					id
					title
				}
			}
		}
	}`