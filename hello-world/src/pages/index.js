import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="flex-grow px-4 mx-6">
        <Link to="/about">About</Link>
        <p>New Model Out there</p>
        <img
          className="h-auto"
          src="https://source.unsplash.com/random/400x200"
          alt=""
        />
        <h4 className="text-gray">{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 className="underline text-xl text-blue-500 hover:text-2xl">
              {node.frontmatter.title}{" "}
              <span className="text-black text-lg">
                — {node.frontmatter.date}
              </span>
            </h3>
            {/* <p className="mx-6">{node.excerpt}</p> */}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
