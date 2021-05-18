import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SpotlightCard from '../src/components/SpotlightCard/SpotlightCard'

function About(props: any) {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque
            odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi
            laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus
            aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi
            massa at lorem. Aliquam blandit sed nunc vel convallis.
          </p>
        </div>
        <div className={styles.people}>
          <div className={styles.row}>
            <SpotlightCard
              name="Mariane Bekker"
              image="/marianebekker.jpeg"
              role="Founder &amp; CEO"
              linkedin="https://www.linkedin.com/in/marianebekker/"
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi massa at lorem. Aliquam blandit sed nunc vel convallis."></SpotlightCard>
            <SpotlightCard
              name="Alice Davis"
              role="Founder &amp; Developer"
              image="/alicedavis.jpg"
              linkedin="https://www.linkedin.com/in/diffalot/"
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi massa at lorem. Aliquam blandit sed nunc vel convallis."></SpotlightCard>
          </div>
          <div className={styles.row}>
            <SpotlightCard
              name="Louise Lehman"
              role="Founder &amp; Developer"
              image="/louiselehman.jpeg"
              linkedin="https://www.linkedin.com/in/louiselehman/"
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi massa at lorem. Aliquam blandit sed nunc vel convallis."></SpotlightCard>
            <SpotlightCard
              name="Lexi Lewtan"
              role="Founder &amp; Product Vision"
              image="/lexilewtan.png"
              linkedin="https://www.linkedin.com/in/lexilewtan/"
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi massa at lorem. Aliquam blandit sed nunc vel convallis."></SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
