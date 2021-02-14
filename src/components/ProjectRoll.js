import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="timeline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={` ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >

                <header className="timeline-header">
                    <span className="tag is-medium is-primary">{post.frontmatter.date}</span>
                </header>

                <div className="timeline-item ">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content ">
                    <p className="post-meta blog-list-item tile is-child box notification">
                      <Link
                        className="title has-text-primary is-size-4 mb-1 is-block"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>

                      <span className="is-block mb-2">{post.excerpt}</span>
                      <br />
                      <Link className="button" to={post.fields.slug}>
                        continuar lendo →
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </section>
    )
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
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
                date(formatString: "YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
)
