import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({data}) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>A rabbit hole</h2>
          <h3>Learn all the things</h3>
          <p>A rabbit hole is a website devoted to organizing podcasts by topic. </p>
          <Link className={styles.btn} to="/topics">Start learning</Link>
        </div>
        <img src="https://images.unsplash.com/photo-1530840197133-665af68f9d71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" alt="hole" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}
