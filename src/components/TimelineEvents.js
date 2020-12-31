import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import { Link, graphql, StaticQuery } from 'gatsby'


class TimelineEvents extends React.Component {
    render() {
      const { data } = this.props
      const { edges: timelineEventsAux } = data.allMarkdownRemark

      var tles = [];

      timelineEventsAux.map(({ node: tlenode }) => (
        tlenode.frontmatter.timelineEvents.map(timelineEvents => (
            tles.push(timelineEvents)
        ))
      ))

      var sorted = tles.sort((a, b) => (a.year > b.year) ? -1 : 1);

      return (
        <section className="timeline">
                {sorted.map((item, i, arr) => (
                    <div key={i} >
                        <div>
                            {i === 0 ? (
                            <header className="timeline-header">
                                <span className="tag is-medium is-primary">{arr[i].year}</span>
                            </header>
                            ) : (
                            arr[i].year !== arr[i - 1].year &&
                            <header className="timeline-header">
                                <span className="tag is-medium is-primary">{arr[i].year}</span>
                            </header>
                            )}
                            <div className="timeline-item">
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <p className="heading">{item.event}</p>
                                    <p>{item.bib}</p>
                                    <Link to={item.link} className="btn">acessar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
      </section>
      )
    }
}

TimelineEvents.propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(
            PropTypes.shape({
              node: PropTypes.shape({
                  frontmatter: PropTypes.shape({
                    timelineEvents: PropTypes.arrayOf(
                        PropTypes.shape({
                            year: PropTypes.number,
                            event: PropTypes.string,
                            bib: PropTypes.string,
                            link: PropTypes.string,
                        })
                    ),
                  })
              })
            })
        )
      }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
            query TimelineEvents {
                allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___timelineEvents___year] }
                    filter: { frontmatter: { templateKey: { eq: "publications-page" } } }
                ) {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                templateKey
                                timelineEvents {
                                    bib
                                    event
                                    link
                                    year
                                }
                            }
                        }
                    }
                }
            }
        `
    }
    render={(data, count) => <TimelineEvents data={data} count={count} />}
  />
)
