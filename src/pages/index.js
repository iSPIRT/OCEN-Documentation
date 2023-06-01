import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            OCEN Intro in - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


function Hero() {
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="row">
              <div className="col col--8">
                <h1 className="hero-title">
                  Democratising Credit
                </h1>

                <h2 className="hero-subtitle">
                  Enabling every lender to lend remotely and provide borrowers a wide range of loans
                </h2>
              </div>
              <div className="col col--4">
                {/* <SvgHero color="#FFFFFF" className="illustration" /> */}
              </div>
            </div>
            <div className="boxes">
              <div className="box box-create">
                {/* <SvgCreateBg color="#FFFFFF" className="bg" /> */}
                <span className="icon">
                  {/* <SvgCreate color="#FFFFFF" /> */}
                </span>
                <div className="text">
                  <h3 className="title">Create</h3>
                  <p className="description">
                    Create a new database using cloud, Docker or from source
                  </p>
                  <span className="more">
                    Create a database
                    {/* <SvgArrowRight color="#DC382C" /> */}
                  </span>
                </div>
                <a href={useBaseUrl('/create/redis-stack')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-develop">
                {/* <SvgDevelopBg color="#FFFFFF" className="bg" /> */}
                <span className="icon">
                  {/* <SvgDevelop color="#FFFFFF" /> */}
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">
                    Develop your application using your favorite language
                  </p>
                  <span className="more">
                    Code your application
                    {/* <SvgArrowRight color="#DC382C" /> */}
                  </span>
                </div>
                <a href={useBaseUrl('/develop/')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-explore">
                {/* <SvgExploreBg color="#FFFFFF" className="bg" /> */}
                <span className="icon">
                  {/* <SvgExplore color="#FFFFFF" /> */}
                </span>
                <div className="text">
                  <h3 className="title">Explore</h3>
                  <p className="description">
                    Insert,update and explore your database using RedisInsight
                  </p>
                  <span className="more">
                    Explore your data
                    {/* <SvgArrowRight color="#DC382C" /> */}
                  </span>
                </div>
                <a href={useBaseUrl('/explore/')} className="link">
                  Read More
                </a>
              </div>

              <div className="box box-operate">
                {/* <SvgExploreBg color="#FFFFFF" className="bg" /> */}
                <span className="icon">
                  {/* <SvgOperate /> */}
                </span>
                <div className="text">
                  <h3 className="title">Operate</h3>
                  <p className="description">
                    Provision Redis and accelerate app deployment using DevOps
                  </p>
                  <span className="more">
                    Operate your database
                    {/* <SvgArrowRight color="#DC382C" /> */}
                  </span>
                </div>
                <a href={useBaseUrl('/operate/')} className="link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <Hero />
    </Layout>
  );
}
