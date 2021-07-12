import React from 'react'
import Layout from '../components/Layout'
import styles from "../styles/article-details.module.css"

export default function ArticleDetails() {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>title</h2>
                <h2>description</h2>
                <h2>title</h2>
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={} />
        </Layout>
    )
}