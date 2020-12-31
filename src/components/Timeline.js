import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Timeline = ({ data }) => (
  <div className="columns">
    {data.map((timelineEvent) => (
      <div key={timelineEvent.year} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {timelineEvent.year}
          </h4>
          <p className="has-text-weight-semibold">{timelineEvent.description}</p>
          <ul>
            {timelineEvent.timelineEventItems.map((timelineEventItem) => (
              <li key={timelineEventItem} className="is-size-5">
                  <div>
                    {timelineEventItem.event}
                    {timelineEventItem.bib}
                    <Link to={timelineEventItem.link} className="btn">acessar</Link>
                  </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

// Timeline.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       year: PropTypes.string,
//       items: PropTypes.array,
//     })
//   ),
// }

Timeline.propTypes = {
    data: PropTypes.arrayOf(
    PropTypes.shape({
        year: PropTypes.string,
        timelineEventItems: PropTypes.arrayOf(
            PropTypes.shape({
                event: PropTypes.string,
                bib: PropTypes.string,
                link: PropTypes.string,
            })
        ),
    })
  ),
}

export default Timeline
