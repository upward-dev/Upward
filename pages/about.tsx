import React from 'react'
import styles from '../styles/Home.module.css'
import SpotlightCard from '../src/components/SpotlightCard/SpotlightCard'

function About(props: any) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>About Us</h1>
      <img
        src="/code-circles-icon.png"
        alt="two circles"
        className={styles.logo}></img>
      <div className={styles.row}>
        <SpotlightCard
          name="Mariane Bekker"
          image=""
          role="Founder &amp; CEO"
          linkedin=""
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi massa at lorem. Aliquam blandit sed nunc vel convallis."></SpotlightCard>
        <SpotlightCard
          name="Alice Davis"
          role="Founder &amp; Developer"
          image=""
          linkedin=""
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
          image=""
          linkedin=""
          bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque odio, tincidunt nec neque in, lacinia tincidunt ligula. Morbi laoreet eros quis ipsum dictum aliquet. Morbi pulvinar, diam dapibus aliquam dapibus, felis orci tincidunt quam, sit amet efficitur mi massa at lorem. Aliquam blandit sed nunc vel convallis."></SpotlightCard>
      </div>
    </div>
  )
}

export default About
