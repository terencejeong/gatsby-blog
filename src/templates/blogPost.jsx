import React from 'react';
import { graphql } from 'gatsby'

const Template = ({ data }) => {
  const { markdownRemark } = data;
  console.log(data)
  const title = markdownRemark.frontmatter.title;
  const html = markdownRemark.html;
  console.log(html)
  return (
    <div>
      <h1 style={{fontFamily: 'avenir'}}>{title}</h1>
      <div
        className='blogpost'
        dangerouslySetInnerHTML={{__html: html}}
        style={{ fontFamily: 'avenir' }}
      />
    </div>
  )
}

// here we are saying, we want the path that is 'equal' to the path in our variable.
export const query = graphql`
  query($pathSlug: String!) {
      markdownRemark(frontmatter: { path: { eq: $pathSlug } } ) {
          html
          frontmatter {
              title
          }
      }
  }
`

export default Template
