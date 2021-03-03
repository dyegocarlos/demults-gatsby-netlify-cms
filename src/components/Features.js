import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import site from '../img/social/site.svg'
import lattes from '../img/social/lattes.svg'
import mail from '../img/social/mail.svg'
import linkedin from '../img/social/linkedin.svg'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                height: '240px',
                width: '200px',
                margin: '0 auto',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h4>{item.name}</h4>
          <p>{item.text}</p>
          <div className="">
            {item.lattes &&
            <a href={item.lattes}>
              <img
                src={lattes}
                alt="lattes"
                style={{ width: '1.5em', height: '1.5em', margin:'.5em' }}
              />
            </a>
            }
            {item.linkedin &&
            <a href={item.linkedin}>
              <img
                src={linkedin}
                alt="linkedin"
                style={{ width: '1.5em', height: '1.5em', margin:'.5em' }}
              />
            </a>
            }
            {item.site &&
            <a href={item.site}>
              <img
                src={site}
                alt="site"
                style={{ width: '1.5em', height: '1.5em', margin:'.5em' }}
              />
            </a>
            }
            {item.email &&
            <a href={`mailto:${item.email}`}>
            <img
                src={mail}
                alt="mail"
                style={{ width: '1.5em', height: '1.5em', margin:'.5em' }}
              />
            </a>
            }
          </div>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      text: PropTypes.string,
      lattes: PropTypes.string,
      site: PropTypes.string,
      email: PropTypes.string,
      linkedin: PropTypes.string,
    })
  ),
}

export default FeatureGrid
