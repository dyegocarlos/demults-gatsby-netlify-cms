import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/captura-de-tela-2020-12-17-às-09.17.20.png')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Projetos
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProjectRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
