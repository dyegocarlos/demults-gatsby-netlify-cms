import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Testimonials from '../components/Testimonials'
import Content, { HTMLContent } from '../components/Content'

export const PublicationsPageTemplate = ({ title, content, contentComponent, testimonials }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <aside className="column is-2 aside-menu">
            <Link to='/team' className="navside-item">Histórico</Link>
            <Link to='/team' className="navside-item">Linhas de Pesquisa</Link>
            <Link to='/team' className="navside-item">Equipe</Link>
          </aside>
          <div className="column">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}

PublicationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  testimonials: PropTypes.array,
}

const PublicationsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PublicationsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        testimonials={post.frontmatter.testimonials}
      />
    </Layout>
  )
}

PublicationsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PublicationsPage;

export const publicationsPageQuery = graphql`
  query PublicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        testimonials {
            author
            quote
        }
      }
    }
  }
`
