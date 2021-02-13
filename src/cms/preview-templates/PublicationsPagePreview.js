import React from 'react'
import PropTypes from 'prop-types'
import { PublicationsPageTemplate } from '../../templates/publications-page'

const PublicationsPagePreview = ({ entry, widgetFor, getAsset }) => {
  const entryTimelineEvents = entry.getIn(['data', 'timelineEvents']);
  const timelineEvents = entryTimelineEvents ? entryTimelineEvents.toJS() : [];

  // const entryTimelineEventsItems = entry.getIn(['data', 'timelineEvents', 'timelineEventItems'])
  // const timelineEventsItems = entryTimelineEventsItems ? entryTimelineEventsItems.toJS() : []

  return (
  <PublicationsPageTemplate
    image={getAsset(entry.getIn(['data', 'image']))}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}

    timelineEvents={timelineEvents}

    // timelineEvents={{
    //   year: entry.getIn(['data', 'timelineEvents', 'year']),
    //   timelineEventItem: timelineEventsItems,
    // }}
  />
)}

PublicationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PublicationsPagePreview

