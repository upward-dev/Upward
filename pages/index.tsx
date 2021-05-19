import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Circles</title>
        <meta name="description" content="Advancing women in tech" />
        <link rel="icon" href="/code-circles-icon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.masthead}>
          <h1 className={styles.title}>Code Circles</h1>
          <img
            src="/code-circles-icon.png"
            alt="two circles"
            className={styles.logo}></img>
        </div>

        <p className={styles.description}>
          Advancing women in tech through study groups and mentorship. This
          website is an open source project where women engineers are able to
          collaboratively improve their skills, mentor one another, and get
          hands-on experience with the latest technologies.
        </p>

        <div className={styles.grid}>
          <a
            href="https://forms.gle/bXWayRQiW6V5UJxE6"
            target="_blank"
            className={styles.circle}>
            <h2>Sign Up &rarr;</h2>
            <p>Request to be part of a study group.</p>
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdC-AbV2SNhMS99yhY6r4Gu34UC9DhVWIM7utII6irV1pyaSw/viewform"
            target="_blank"
            className={styles.circle}>
            <h2>Find Your Next Role &rarr;</h2>
            <p>
              Request to get connected directly with hiring managers at fast
              growing, inclusive and diverse startups.
            </p>
          </a>

          <a
            href="https://www.upwardtalent.co/"
            target="_blank"
            className={styles.circle}>
            <h2>Upward &rarr;</h2>
            <p>
              Mentorship focused on landing women engineers their ideal role
              through career coaching, resume review, and mock interviews.
            </p>
          </a>

          <a
            href="https://github.com/code-circles"
            target="_blank"
            className={styles.circle}>
            <h2>Open Source &rarr;</h2>
            <p>Check out the code that fuels this project.</p>
          </a>

          <a href="/about" className={styles.circle}>
            <h2>About &rarr;</h2>
            <p>
              Get to know us, why we're here, and about the different ways to
              get involved.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
