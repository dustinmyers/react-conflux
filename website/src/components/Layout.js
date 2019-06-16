import React from "react"
import "../styles/index.scss"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
