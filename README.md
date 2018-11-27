# gatsby-starter-hello-world
Starter with the bare essentials needed for a [Gatsby](https://www.gatsbyjs.org/) site.

Install this starter (assuming Gatsby is installed) by running from your CLI:
```
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Or [view the live demo here](https://gatsby-starter-hello-world-demo.netlify.com/).

## Running in development
`gatsby develop`


# Setup

Installed the following
`npm install --save gatsby-source-filesystem@next gatsby-transformer-remark@next`

Then, we created a `gatsby-config.js` file.

gatsby-source-filesystem is a plugin for creating File nodes from the file system. 

The gatsby transformer remark is responsible for adding allMarkdownRemark and markdownRemark 
in our graphIQL.

Then we did some config where we added the following

```js
module.exports = {
  siteMetadata: {
    title: 'My Blog',
    description: 'This is my cool blog.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
```
Then, created the folders in the src/pages directory. 

To create pages for gatsby, we made a file called gatsby-node.js in the root directory.

Then created a templates folder in the src directory. Then added the file blogPost.jsx
 
