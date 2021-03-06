module.exports = {
	siteMetadata: {
		title: `Gatsby + Strapi`,
		description: `Gatsby blog with Strapi as a headless CMS`,
		author: `@gatsbyjs & @strapi`,
		menuLinks: [
			{
				name: `Articles`,
				link: `/articles`
			},
			{
				name: `Events`,
				link: `/events`
			}
		]
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				sassRuleTest: /\.global\.s(a|c)ss$/,
				sassRuleModulesTest: /\.module\.s(a|c)ss$/,
				data: `
					@import "${__dirname}/src/styles/setup.global.scss";
					@import "${__dirname}/src/styles/colors.global.scss";
					@import "${__dirname}/src/styles/fonts.global.scss";
				`,
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				contentTypes: [
					`article`,
					`event`,
					`user`
				],
				queryLimit: 1000,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		`gatsby-plugin-offline`,
	],
}