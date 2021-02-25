import React from "react"
import Footer from "./footer"
// import Sidenav from "./sidenav"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <p className="mx-32 max-w-md">{children}</p>
      <Footer />
    </div>
  )
}
