import React from 'react'
import Layout from '../components/Layout'
import styles from "../styles/article-details.module.css"

const ArticleDetails=() => {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>title</h2>
                <h3>description</h3>
            </div>
            {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
        </Layout>
    )
}

export default ArticleDetails