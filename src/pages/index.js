import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Technical Writer based in Apex, NC</p>
          <Link className={styles.btn} to="/topics">Now...go learn all the things</Link>
        </div>
      </section>
    </Layout>
  )
}