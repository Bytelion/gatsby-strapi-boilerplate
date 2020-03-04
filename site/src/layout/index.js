import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          siteTitle={ data.site.siteMetadata.title }
          menuLinks={ data.site.siteMetadata.menuLinks } />
        <main className="page_main">{ children }</main>
        <Footer />
      </>
    )}
  />
)

export default Layout
