import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import NLevelAnalytics from '@site/src/components/NLevelAnalytics';

import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate>Welcome to positive-intentions</Translate></h1>
        <p className="hero__subtitle">
          <Translate>
            positive-intentions is a decentralised P2P chat app. Aiming to provide military-grade encrypted messaging encapsulated into a webapp.
          </Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate>P2P Chat App Tutorial - 5min ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <NLevelAnalytics />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
