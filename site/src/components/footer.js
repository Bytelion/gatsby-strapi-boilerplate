import React from "react"

const Footer = () => (
	<footer className="page_footer">
		<div className="fs_row">
			<div className="fs_cell">
				<div className="page_footer_inner">
					© {new Date().getFullYear()}, Built with
					{` `}
					<a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://strapi.io">Strapi</a>
				</div>
			</div>
		</div>
	</footer>
)

export default Footer
