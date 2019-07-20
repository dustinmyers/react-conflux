import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import confluxAtomLogo from '../images/conflux-logo-atom-white.png';
import confluxDarkLogo from '../images/conflux-logo-dark.png';

const index = () => {
  return (
    <Layout>
      <main className="home__container">
        <section className="home__header">
          <div className="home__header__content">
            <div className="home__logo">
              <img src={confluxDarkLogo} alt="Conflux logo" />
            </div>
            <p className="home__header__text">
              A modular and elegant state management system.
            </p>
            <div className="home__header__links">
              <Link className="home__link doc__link" to="/documentation">
                Get Started
              </Link>
              <a
                className="home__link github__link"
                href="https://github.com/dustinmyers/react-conflux"
              >
                GitHub
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
      </main>
    </Layout>
  );
};

export default index;
