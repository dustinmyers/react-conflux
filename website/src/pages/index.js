import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import confluxAtomLogo from '../images/conflux-logo-atom-white.png';

const index = () => {
  return (
    <Layout>
      <div className="home__container">
        <section className="home__header">
          <div className="home__header__content">
            <h1 className="home__header__title">Conflux</h1>
            <p className="home__header__text">
              Modular. Elegant. Easy.
            </p>
            <div className="home__header__links">
              <Link className="doc__link" to="/documentation">
                Get Started
              </Link>
              <a
                className="github__link"
                href="https://github.com/dustinmyers/react-conflux"
              >
                GitHub >
              </a>
            </div>
          </div>
          <div className="header__conflux-logo">
            <img
              src={confluxAtomLogo}
              draggable="false"
              alt="Conflux atom logo in white"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default index;
