import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import TimelineEvents from '../components/TimelineEvents'
import Content, { HTMLContent } from '../components/Content'

export const PublicationsPageTemplate = ({ title, content, contentComponent, timelineEvents }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <TimelineEvents data={timelineEvents} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PublicationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  timelineEvents: PropTypes.array
}

const PublicationsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PublicationsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        timelineEvents={post.frontmatter.timelineEvents}
      />
    </Layout>
  )
}

PublicationsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PublicationsPage

export const publicationsPageQuery = graphql`
  query PublicationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        timelineEvents {
          year
          event
          bib
          link
        }
      }
    }
  }
`
