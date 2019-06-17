import React from 'react';

import Layout from '../components/Layout/Layout';
import confluxAtomLogo from '../images/conflux-atom-white.png';

const index = () => {
  return (
    <Layout>
      <div className="home__container">
        <section className="home__header">
          <div className="header__conflux-logo">
            <img src={confluxAtomLogo} alt="Conflux atom logo in white" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default index;
