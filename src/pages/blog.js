import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.edges.map((edge, i) => (
    <li key={i} className={blogStyles.post}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
      </Link>
    </li>
  ))
  // console.log(data)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{posts}</ol>
    </Layout>
  )
}

export default BlogPage
