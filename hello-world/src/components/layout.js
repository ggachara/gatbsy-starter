import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col flex-wrap">
      <Header />
      {children}
      <Footer className="inset-x-0 bottom-0" />
    </div>
  )
}
