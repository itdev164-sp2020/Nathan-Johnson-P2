import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const { title, body } = data.contentfulBlogPost

  return (
    <Layout>
      <SEO
        title={title}
        description={data.contentfulBlogPost.body.childMarkdownRemark.excerpt}
      />
      <p>&nbsp;</p>
      <div className="body">
        <img
          style={{ width: "50%", margin: "0 auto", display: "block" }}
          src={data.contentfulBlogPost.heroImage.fluid.src}
          alt={title}
        />
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      heroImage {
        fluid(maxWidth: 1400) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`
