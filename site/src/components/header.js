import { Link } from "gatsby"
import React from "react"

import MainNav from "../partials/main-nav"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="page_header">
    <div className="row">
      <h1 className="logo">
        <Link to="/">{ siteTitle }</Link>
      </h1>
      <MainNav menuLinks={ menuLinks }></MainNav>
    </div>
  </header>
)

export default Header
