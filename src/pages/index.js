import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Typed from 'react-typed';


function Feature() {

    return (

        <div className="fakeTerminal">
        < div className="fakeMenu">
        <div className="fakeButtons fakeClose"></div>
        <div className="fakeButtons fakeMinimize"></div>
        <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
        <p className="lines line1">
        <Typed
    strings={['$ 👋 pal!']}
    typeSpeed={100}
    />
    </p>

    <p className="lines line2">
        <Typed
    strings={[' This is an official documentation of kottans.org!']}
    typeSpeed={70}
    startDelay={1500}
    />
    </p>
    <p className="lines line3">
        <Typed
    strings={['[?] Here you can find everything for your needs:']}
    typeSpeed={50}
    startDelay={7000}
    />
    </p>
    <p className="lines line3">
        <Typed
    strings={[
            "Material for study",
        "Videos and courses",
        "Our future events",
        "How to initialize your ideas",
        "(=^･^=)"]}
    typeSpeed={100}
    backSpeed={50}
    backDelay={10}
    startDelay={10000}
    loop
    smartBackspace
    />
    </p>

    <p className="lines line4">
        <Typed
    strings={['> Don\'t waist any minutes and check out what you want 😼']}
    typeSpeed={100}
    startDelay={13000}
    />
    </p>
    </div>
    </div>
);
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
    title={`Hello from ${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
            <main>
            <section className="flex-grid">

                <div className="container col">
                    <img
                    className='cat'
                    alt="kottans logo"
                    src={useBaseUrl('img/logoBlack.svg')}
                    />
                    <div className="item">
                    <h1 className="hero__title center">{siteConfig.title}</h1>
                    <p className="hero__subtitle center">
                        {siteConfig.tagline}
                    </p>
                    <div className={styles.buttons}>
                    <Link
                    className={classnames(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted,
                )}
                    to={useBaseUrl('docs/doc/philosophy')}>
                    Get Started
                    </Link>
                    </div>
                </div>
            </div>
            <div className="container col">
                <Feature/>
            </div>
            </section>
            </main>
        </Layout>
);
}

export default Home;
