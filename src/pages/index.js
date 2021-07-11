import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>A rabbit hole</h2>
          <h3>Learn all the things</h3>
          <p>A rabbit hole is a website devoted to organizing podcasts by topic. </p>
          <Link className={styles.btn} to="/topics">Start learning</Link>
        </div>
      </section>
    </Layout>
  )
}