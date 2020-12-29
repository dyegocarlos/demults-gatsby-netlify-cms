import React from 'react'
import PropTypes from 'prop-types'
import { PublicationsPageTemplate } from '../../templates/publications-page'

const entryTestimonials = entry.getIn(['data', 'testimonials'])
const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

const PublicationsPagePreview = ({ entry, widgetFor }) => (
  <PublicationsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    testimonials={testimonials}
  />
)

PublicationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PublicationsPagePreview

