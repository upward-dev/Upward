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
        <h1 className={styles.title}>Code Circles</h1>
        <img
          src="/code-circles-icon.png"
          alt="two circles"
          className={styles.logo}></img>

        <p className={styles.description}>
          Advancing women in tech through study groups and mentorship. This
          website is an open source project where women engineers are able to
          collaboratively improve their skills, mentor one another, and get
          hands-on experience with the latest technologies.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.circle}>
            <h2>Sign Up &rarr;</h2>
            <p>Request to be part of a study group.</p>
          </a>

          <a
            href="https://calendly.com/mariane-connect"
            className={styles.circle}>
            <h2>Upward &rarr;</h2>
            <p>
              Mentorship focused on landing women engineers their ideal role
              through career coaching, resume review, and mock interviews.
            </p>
          </a>

          <a href="https://github.com/code-circles" className={styles.circle}>
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.vercelLogo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
