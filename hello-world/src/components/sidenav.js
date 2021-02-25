import React from "react"
import { graphql } from "gatsby"

export default function Sidenav() {
  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className="underline text-xl text-blue-500 hover:text-2xl">
            {node.frontmatter.title}{" "}
          </h3>
        </div>
      ))}
    </>
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
        }
      }
    }
  }
`
