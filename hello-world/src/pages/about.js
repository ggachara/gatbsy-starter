import React from "react";
import { Link } from "gatsby";
import  Header  from "../components/header";
import  Footer  from "../components/footer";

export default function Home() {
  return (
  <div style={{color: `purple`}}>
      <Header headertext="About"/>
      <Link to="/">Home</Link>
      <p>New Model Out there</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <Footer />
  </div>)
}
