import React from 'react'
import PropTypes from 'prop-types'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, widgetFor, getAsset }) => {
  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const tags = entry.getIn(['data', 'tags'])
  return (
    <ProjectPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      coworkers={entry.getIn(['data', 'coworkers'])}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])),
          alt: entry.getIn(['data', 'main', 'image2', 'alt']),
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])),
          alt: entry.getIn(['data', 'main', 'image3', 'alt']),
        },
      }}
      testimonials={testimonials}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      link={entry.getIn(['data', 'link'])}
    />
  )
}

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPostPreview
