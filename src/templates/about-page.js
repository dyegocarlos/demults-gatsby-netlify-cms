import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${image &&
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <h2
          className="has-text-weight-bold is-size-1 heading-title-page"
        >
          {title}
        </h2>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            {/* <aside className="column is-2 aside-menu">
              <Link to='/team' className="navside-item">Histórico</Link>
              <Link to='/team' className="navside-item">Linhas de Pesquisa</Link>
              <Link to='/team' className="navside-item">Equipe</Link>
            </aside> */}
            <div className="column">
              <div className="section">
                {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2> */}
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
      }
    }
  }
`
