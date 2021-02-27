import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Sidenav() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <header>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3 className="underline text-xl text-blue-500 hover:text-2xl">
            {node.frontmatter.title}{" "}
          </h3>
        </div>
      ))}
    </header>
  )
}
