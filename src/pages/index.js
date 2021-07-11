import React from "react"
import { Link } from 'gatsby'
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <section>
      <Navbar />
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Technical Writer based in Apex, NC</p>
        <Link to="/topics">Now...go learn all the things</Link>
      </div>
    </section>
  )
}