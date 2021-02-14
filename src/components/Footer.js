import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-invert.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import mail from '../img/social/mail.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="DEMULTS"
            style={{ width: '29em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                  <li>
                      <Link className="navbar-item" to="/">
                        Página Inicial
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Histórico
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Linhas de Pesquisa
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Projetos
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                  <li>
                      <Link className="navbar-item" to="/team">
                        Pesquisadores
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/publications">
                        Prêmios e Publicações
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contato
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="mail" href="https://mail.com">
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
      </footer>
    )
  }
}

export default Footer
