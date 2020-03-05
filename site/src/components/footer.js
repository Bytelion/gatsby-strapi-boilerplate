import React from "react"

const Footer = () => (
	<footer className="page_footer">
		<div className="row">
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://strapi.io">Strapi</a>
		</div>
	</footer>
)

export default Footer
