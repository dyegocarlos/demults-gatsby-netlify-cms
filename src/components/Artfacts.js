import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ArtfactGrid = ({ gridItems }) => (
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
          <a href={item.link} className="btn is-size-6">
            fazer download
          </a>
        </section>
      </div>
    ))}
  </div>
)

ArtfactGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default ArtfactGrid
