import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="flex space-x-4 h-full bg-gray-100">
        {" "}
        <div className="border-2 border-black items-center w-1/4 px-4 mt-4"></div>
        <div className="border-2 border-black w-2/4 items-cente px-3 py-3 mt-4">
          <h1 className="text-3xl font-semibold pt-2 text-center">
            {post.frontmatter.title}
          </h1>
          <h1 className="text-lg italic font-normal py-2 text-center">
            {post.frontmatter.description}
          </h1>
          <div
            className="text-lg font-medium text-justify tracking-wide leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className="border-2 border-black w-1/4 items-center mt-4">
          <h2>On this page</h2>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
