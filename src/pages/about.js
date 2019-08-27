import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function about() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        Sabbir Ahmed Sristy <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}
