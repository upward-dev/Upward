import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SpotlightCard from '../src/components/SpotlightCard/SpotlightCard'

function About() {
  return (
    <div>
      <Head>
        <title>Code Circles</title>
        <meta name="description" content="Advancing women in tech" />
        <link rel="icon" href="/code-circles-icon.png" />
      </Head>
      <div className={styles.main}>
        <div className={styles.masthead}>
          <h1 className={styles.title}>About Us</h1>
          <img
            src="/code-circles-icon.png"
            alt="two circles"
            className={styles.logo}></img>
        </div>
        <div className={styles.aboutDescription}>
          <p>
            This diversity project started to help give engineers{' '}
            <b>hands-on experience</b> with new and popular technologies used at
            startups, such as <b>React</b> and <b>Node.js</b>. Our goal is to
            create a web application to help <b>advance women in tech</b>{' '}
            through study groups and <b>mentorship</b>. Our web application is
            an <b>open source project</b> that women engineers work on to build
            features on a live application that both <b>builds their skills</b>,
            and <b>benefits the community</b> as a whole.
          </p>
          <p>
            Get involved by signing up for the waitlist to join one of our study
            groups, or by signing up to get mentorship and career development
            support as you find your next role with Upward.
          </p>
        </div>
        <div className={styles.people}>
          <div className={styles.row}>
            <SpotlightCard
              name="Mariane Bekker"
              image="/marianebekker.jpeg"
              role="Founder &amp; CEO"
              linkedin="https://www.linkedin.com/in/marianebekker/"
              bio="Mariane is a software engineer leader with over a decade of experience mentoring software engineers. She started her career as a software engineer after graduating from McGill University in Canada and then moved to San Francisco.  Her passion and super power is mentoring other women in tech to close the gender gap."></SpotlightCard>
            <SpotlightCard
              name="Alice Davis"
              role="Founder &amp; Developer"
              image="/alicedavis.jpg"
              linkedin="https://www.linkedin.com/in/diffalot/"
              bio="Alice aims to contribute to secured and anonymized, in-browser communications and data sharing platforms built on open web standards to amplify voices of marginalized communities. She prioritizes mentoring members of marginalized groups as they pursue commerce as web developers and entrepreneurs. She really likes making websites, native applications, and embedded devices that make people's lives easier and safer."></SpotlightCard>
          </div>
          <div className={styles.row}>
            <SpotlightCard
              name="Louise Lehman"
              role="Founder &amp; Developer"
              image="/louiselehman.jpeg"
              linkedin="https://www.linkedin.com/in/louiselehman/"
              bio="Louise is a Full Stack Software Engineer in the health and wellness industry. She loves having the opportunity to work and interact with people across differing disciplines, including product, architecture, UX, copy, research, and AI/ML. She aspires to be a humble teacher, a trustworthy and helpful collaborator, a good listener, an analytical thinker, a good friend, and to be graceful amidst chaos."></SpotlightCard>
            <SpotlightCard
              name="Lexi Lewtan"
              role="Founder &amp; Product Vision"
              image="/lexilewtan.png"
              linkedin="https://www.linkedin.com/in/lexilewtan/"
              bio="Lexi is the Founder &amp; CEO at Centered, building the MasterClass of Mental Health. Her interests and experience are in cofounder or leadership Operations or Go-to-Market positions."></SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
