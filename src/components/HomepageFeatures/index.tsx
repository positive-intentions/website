import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const agnosticPng = require('@site/static/img/home-icons/agnostic.png').default;
const dataExportImportPng = require('@site/static/img/home-icons/data-export-import.png').default;
const decentralisedPng = require('@site/static/img/home-icons/decentralized.png').default;
const noRegistrationPng = require('@site/static/img/home-icons/no-registration.png').default;
const pushNotificationsPng = require('@site/static/img/home-icons/push-notifications.png').default;
const videoCallsPng = require('@site/static/img/home-icons/video-calls.png').default;

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  Png: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: 'Decentralised and Secure' }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Png: decentralisedPng,
    description: (
      <Translate>
        Experience true privacy with our P2P chat app. No centralized servers, no hidden data storage—just secure, direct conversations.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'No Install/Registration Required' }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Png: noRegistrationPng,
    description: (
      <Translate>
        Start communicating right away without worrying about lengthy sign-up processes. Jump in and connect instantly.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'Video Calls' }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Png: videoCallsPng,
    description: (
      <Translate>
        More than just a chat app, our platform facilitates face-to-face conversations. Enjoy clear, efficient video calls wherever you are.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'Push Notifications' }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Png: pushNotificationsPng,
    description: (
      <Translate>
        Stay informed and never miss important updates. Our push notifications ensure you're always up-to-date with your conversations.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'Data Export/Import' }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Png: dataExportImportPng,
    description: (
      <Translate>
        Control your data like never before. With our easy export and import feature, your data is always portable, always yours.
      </Translate>
    ),
  },
  {
    title: translate({ message: 'Browser and OS Agnostic' }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Png: agnosticPng,
    description: (
      <Translate>
        Freedom to use your preferred platform. Whether you're on Windows, MacOS, Linux, or prefer a specific browser, we've got you covered.
      </Translate>
    ),
  },
];

function Feature({ title, Svg, Png, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.bgImage)}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        {/* <img src={decentralisedPng} alt="Decentralised" className={styles.featureSvg} /> */}
        <img src={Png} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
