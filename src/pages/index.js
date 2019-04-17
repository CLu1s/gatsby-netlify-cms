import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import heroBanner from '../img/heroBanner.jpg'

const HeroBanner = styled.div`
  width: 100%;
  height: 70vh;
  background-color: blue;
  display: flex;
  background-image: url(${heroBanner});
  background-position: center;
  background-size: cover;
  text-align: center;
`;
const HeroText = styled.h1`
  color: white;
  font-size: 40px;
  flex: 0 0 100%;
  margin: auto;
  font-weight: bold;
  @media (max-width: 767.98px) { 
    padding: 0 5%;
    font-size: 30px;
  }
`
const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Post = styled.div`
  flex: 0 0 23%;
  @media (max-width: 767.98px) { 
    flex: 0 0 100%;
    margin-bottom: 40px;
  }
`
const PostTitle = styled.h3`
  margin: 0 0 10px 0;
  a{
   font-size: 1.4rem;
  }
`
 const IndexPage =  ({data}) => {
    const { edges: posts } = data.allMarkdownRemark
  
    return (
      <Layout>
        <HeroBanner>
            <HeroText>Love what you do and you'll never have to work a day in your life </HeroText>  
        </HeroBanner>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <PostContainer>
              {posts
                .map(({ node: post }) => (
                  <Post key={post.id}>
                    <PostTitle>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </PostTitle>
                    <p>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </Post>
                ))}
            </PostContainer>
          </div>
        </section>
      </Layout>
    )
  }

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}
export default IndexPage;
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    },
    file(relativePath: {
      eq: "static/img/heroBanner.jpeg" 
    }) {
      childImageSharp {
        fixed(width: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
