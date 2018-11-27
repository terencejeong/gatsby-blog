import {
  graphql,
  StaticQuery,
} from 'gatsby';
import React from 'react';

const TitleAndDescription = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'avenir'
    }}>
      <h2 style={{marginBottom: 0}}>
        {title}
      </h2>
      <p
        style={{
          marginTop: 0,
          opacity: 0.5
        }}
      >
        {description}
      </p>
    </div>
  )
};

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
};

export default Header;
