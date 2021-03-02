import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import mail from '../../img/social/mail.svg'
import linkedin from '../../img/social/linkedin.svg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/contact?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section contact">
          <div className="container">
            <div className="content">
              <h1 className="is-12">Contato</h1>
              <div className="columns">
              <form
                className="column is-9"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Nome
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Mensagem
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
              <div className="is-3 pl-4 mt-4">
                <p>
                  <span className="is-block has-text-weight-bold txt-dark">Departamento de Educação</span>
                  <span className="is-block mb-1 text-gray has-text-weight-bold">Universidade Federal Rural de Pernambuco</span>
                  Rua Dom Manuel de Medeiros, s/n <br />
                  Dois Irmãos - Recife/PE <br />
                  CEP: 52171-900
                </p>
                <div className="social">
                  <a title="facebook" href="https://facebook.com">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="mail" href="mailto:demults.ufrpe@gmail.com">
                    <img
                      className="fas fa-lg"
                      src={mail}
                      alt="mail"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="linkedin" href="https://linkedin.com">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
