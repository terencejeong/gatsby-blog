import React from "react"
import Header from '../components/Header'
import { StaticQuery, graphql, Link } from 'gatsby';

const Layout = ({ data }) => {
  console.log(data)
  const { edges } = data.allMarkdownRemark;
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'avenir'
        }}
      >
      {
        edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div key={frontmatter.path}>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </div>
          )
        })
      }
      </div>
    </div>
  )
};

export const query = graphql`
  query HomepageQuery {
      allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
      ) {
          edges {
              node {
                  frontmatter {
                      title
                      path
                      date
                  }
                  html
              }
          }
      }
  }
`

export default Layout
